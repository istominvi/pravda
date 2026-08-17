# PRAVDA AI — черновик realtime-протокола

Этот документ фиксирует предполагаемый контракт между React-клиентом и backend. Имена и схемы можно менять до первой beta, но сообщения должны оставаться версионированными и идемпотентными.

## 1. Соединение

```text
WS /v1/realtime?session_id=sess_123&protocol=1
Authorization: Bearer <short-lived-session-token>
```

Не передавать долгоживущий access token в query string. Query показан только как читаемая схема; production должен использовать безопасный механизм авторизации, поддерживаемый выбранной инфраструктурой.

## 2. Общий envelope

```ts
interface RealtimeEnvelope<TType extends string, TPayload> {
  protocol: 1
  event_id: string
  type: TType
  session_id: string
  client_ts?: number
  server_ts?: number
  sequence?: number
  payload: TPayload
}
```

`event_id` нужен для deduplication после reconnect.

## 3. Client → Server

### `session.configure`

```json
{
  "protocol": 1,
  "event_id": "evt_1",
  "type": "session.configure",
  "session_id": "sess_123",
  "payload": {
    "language": "ru",
    "retention_mode": "transcript_only",
    "tracks": [
      { "track_id": "mic", "speaker_hint": "local" },
      { "track_id": "tab", "speaker_hint": "remote" }
    ]
  }
}
```

### `consent.confirm`

```json
{
  "type": "consent.confirm",
  "payload": {
    "notice_version": "2026-08-01",
    "confirmed_at": "2026-08-16T10:00:00Z",
    "audio_capture": true,
    "transcript_storage": true,
    "audio_storage": false
  }
}
```

### `audio.chunk`

Рекомендуется binary frame с компактным header. JSON-вариант допустим только для prototype.

```json
{
  "type": "audio.chunk",
  "sequence": 431,
  "client_ts": 1730000000000,
  "payload": {
    "track_id": "mic",
    "codec": "pcm_s16le",
    "sample_rate": 16000,
    "channels": 1,
    "duration_ms": 80,
    "data_base64": "..."
  }
}
```

### `audio.commit`

Принудительно завершает turn, например при ручной кнопке.

### `session.pause`, `session.resume`, `session.close`

`session.close` должен закрывать STT provider session и возвращать финальный ack.

### `suggestion.feedback`

```json
{
  "type": "suggestion.feedback",
  "payload": {
    "suggestion_id": "sug_1",
    "action": "copied",
    "useful": true
  }
}
```

Не отправлять скрытый поведенческий telemetry без consent.

## 4. Server → Client

### `session.ready`

Содержит capabilities, лимиты и negotiated audio format.

### `transcript.partial`

```json
{
  "type": "transcript.partial",
  "payload": {
    "segment_id": "seg_12",
    "revision": 4,
    "track_id": "tab",
    "speaker_id": "remote",
    "text": "по будапештскому меморандуму",
    "start_ms": 18200,
    "end_ms": 19900,
    "language": "ru",
    "confidence": 0.78
  }
}
```

Partial заменяет предыдущую revision того же `segment_id`.

### `transcript.final`

Final immutable. Исправления оформляются отдельным `transcript.corrected`.

### `turn.final`

```json
{
  "type": "turn.final",
  "payload": {
    "turn_id": "turn_8",
    "speaker_id": "remote",
    "segment_ids": ["seg_12", "seg_13"],
    "text": "...",
    "start_ms": 18200,
    "end_ms": 24300
  }
}
```

### `claim.upsert`

```json
{
  "type": "claim.upsert",
  "payload": {
    "claim_id": "clm_9",
    "turn_id": "turn_8",
    "original_text": "...",
    "normalised_claim": "The Budapest Memorandum required automatic military intervention",
    "claim_type": "legal",
    "stance": "asserts",
    "entity_ids": ["doc_budapest"],
    "confidence": "medium"
  }
}
```

### `graph.patch`

```json
{
  "type": "graph.patch",
  "payload": {
    "operations": [
      {
        "op": "node.upsert",
        "node": {
          "id": "clm_9",
          "type": "claim",
          "label": "Автоматическая военная гарантия",
          "status": "active"
        }
      },
      {
        "op": "edge.upsert",
        "edge": {
          "id": "edge_21",
          "source": "clm_9",
          "target": "doc_budapest",
          "kind": "refers_to",
          "confidence": "direct"
        }
      }
    ]
  }
}
```

### `retrieval.results`

Каждый result содержит citation spans, а не только URL.

```json
{
  "type": "retrieval.results",
  "payload": {
    "claim_id": "clm_9",
    "results": [
      {
        "citation_id": "cit_4",
        "document_id": "doc_budapest",
        "version_id": "ver_1994_en",
        "chunk_id": "chunk_5",
        "locator": "paragraph 4",
        "quote": "...",
        "url": "https://...",
        "source_type": "official_document",
        "relevance": "high"
      }
    ]
  }
}
```

### `suggestions.replace`

```json
{
  "type": "suggestions.replace",
  "payload": {
    "turn_id": "turn_8",
    "suggestions": [
      {
        "suggestion_id": "sug_1",
        "kind": "clarify",
        "title": "Уточнить пункт",
        "text": "Какой именно пункт...",
        "citation_ids": [],
        "confidence": "high"
      },
      {
        "suggestion_id": "sug_2",
        "kind": "evidence",
        "title": "Ответить по тексту",
        "text": "Документ содержит...",
        "citation_ids": ["cit_4"],
        "confidence": "high"
      }
    ]
  }
}
```

Правило клиента: suggestion вида `evidence` без citation должен отображаться как неподтверждённый черновик либо не отображаться вовсе.

### `usage.update`

Оставшиеся минуты и ограничения сессии.

### `error`

```json
{
  "type": "error",
  "payload": {
    "code": "STT_PROVIDER_TIMEOUT",
    "message": "Speech service temporarily unavailable",
    "retryable": true,
    "related_event_id": "evt_431"
  }
}
```

## 5. Reconnect

Клиент хранит:

- последний подтверждённый client sequence;
- последний server sequence;
- небольшой ring buffer audio chunks;
- применённые event ids.

После reconnect:

```json
{
  "type": "session.resume",
  "payload": {
    "last_server_sequence": 812,
    "last_acknowledged_audio_sequence": 425
  }
}
```

Backend либо replay events, либо возвращает state snapshot.

## 6. Client reducer

Рекомендуется отдельный reducer, не смешанный с визуальными компонентами:

```ts
interface RealtimeState {
  connection: 'idle' | 'connecting' | 'live' | 'reconnecting' | 'closed'
  segments: Record<string, TranscriptSegment>
  turns: Record<string, ConversationTurn>
  claims: Record<string, Claim>
  graph: { nodes: Record<string, GraphNode>; edges: Record<string, GraphEdge> }
  suggestions: Suggestion[]
  usage: UsageState
}
```

## 7. Версионирование

- `protocol` в envelope;
- backend поддерживает минимум текущую и предыдущую версию;
- неизвестные optional fields игнорируются;
- неизвестный event type логируется и не ломает сессию;
- breaking changes требуют нового protocol number.
