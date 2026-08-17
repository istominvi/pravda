# PRAVDA — модель контента

## 1. Цель

Модель должна одинаково обслуживать Хроно, Связи, статьи и realtime AI. Нельзя поддерживать четыре несвязанных набора данных для одного и того же события.

## 2. Базовые типы

```ts
type EditorialStatus = 'draft' | 'review' | 'published' | 'disputed' | 'archived'
type Confidence = 'direct' | 'documented' | 'interpretive' | 'insufficient'
type Language = 'ru' | 'en' | 'uk'

type Localized<T = string> = Partial<Record<Language, T>> & { ru: T }
```

## 3. Event

```ts
interface Event {
  id: string
  slug: string
  title: Localized
  summary: Localized
  startDate: string
  endDate?: string
  precision: 'day' | 'month' | 'year' | 'range'
  placeIds: string[]
  actorIds: string[]
  documentIds: string[]
  mediaIds: string[]
  claimIds: string[]
  tagIds: string[]
  editorialStatus: EditorialStatus
  reviewedAt?: string
}
```

## 4. Document

```ts
interface Document {
  id: string
  title: Localized
  documentType: 'treaty' | 'law' | 'resolution' | 'declaration' | 'judgment' | 'transcript' | 'other'
  institutionIds: string[]
  signedAt?: string
  effectiveAt?: string
  languageVersions: string[]
  currentVersionId: string
  editorialStatus: EditorialStatus
}

interface DocumentVersion {
  id: string
  documentId: string
  language: string
  sourceUrl: string
  retrievedAt: string
  checksum: string
  mimeType: string
  objectStorageKey?: string
}
```

## 5. Chunk и citation

```ts
interface SourceChunk {
  id: string
  documentVersionId: string
  parentChunkId?: string
  structurePath: string[]
  locator: string
  text: string
  startOffset: number
  endOffset: number
  embeddingVersion?: string
}

interface Citation {
  id: string
  chunkId: string
  startOffset: number
  endOffset: number
  quote: string
  verified: boolean
  verifiedBy?: string
  verifiedAt?: string
}
```

## 6. Claim

```ts
interface Claim {
  id: string
  text: Localized
  claimType: 'document_text' | 'historical' | 'legal' | 'causal' | 'moral' | 'definition' | 'prediction'
  confidence: Confidence
  supportingCitationIds: string[]
  opposingCitationIds: string[]
  counterclaimIds: string[]
  whatNotToClaim?: Localized<string[]>
  editorialStatus: EditorialStatus
}
```

## 7. Relation

```ts
interface Relation {
  id: string
  sourceId: string
  targetId: string
  kind:
    | 'precedes'
    | 'causes'
    | 'contributes_to'
    | 'responds_to'
    | 'implements'
    | 'contradicts'
    | 'reaffirms'
    | 'cites'
    | 'raises_question'
  confidence: Confidence
  label: Localized
  note: Localized
  citationIds: string[]
  counterRelationIds: string[]
  editorialStatus: EditorialStatus
}
```

`causes` использовать только при сильном доказательстве. Для большинства политических цепочек безопаснее `contributes_to` или `political_context`.

## 8. NarrativePattern

Паттерн описывает повторяющийся способ вести спор, а не факт.

```ts
interface NarrativePattern {
  id: string
  title: Localized
  description: Localized
  examples: Array<{
    mediaId: string
    startMs: number
    endMs: number
    transcriptSegmentIds: string[]
  }>
  risks: Localized<string[]>
  usefulQuestions: Localized<string[]>
  editorialStatus: EditorialStatus
}
```

Примеры: буквальное чтение документа, тест на двойной стандарт, возврат к более ранней точке хронологии, разделение государства и элит.

## 9. Media и transcript

```ts
interface MediaItem {
  id: string
  provider: 'youtube' | 'rutube' | 'upload' | 'external'
  externalId?: string
  url: string
  title: string
  publishedAt?: string
  durationMs?: number
  rightsStatus: 'unknown' | 'linked' | 'licensed' | 'owned'
}

interface TranscriptSegment {
  id: string
  mediaId: string
  speakerId?: string
  startMs: number
  endMs: number
  language: string
  text: string
  confidence?: number
  verificationStatus: 'machine' | 'reviewed' | 'approved'
}
```

## 10. Conversation session

Session content не должен автоматически становиться редакционным контентом.

```ts
interface ConversationSession {
  id: string
  userId: string
  createdAt: string
  endedAt?: string
  retentionMode: 'ephemeral' | 'transcript_only' | 'full_history'
  consentVersion: string
  status: 'active' | 'ended' | 'deleting' | 'deleted'
}
```
