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

### 7.1. Текущая реализация аргументов из видео

До перехода на нормализованные `Claim` / `Citation` в приложении используется `ArgumentRecord` из `src/domain/types.ts`. Он хранит тему, тезис, посылки, ход рассуждения, вывод, возражение, ответ, ограничения, уровень уверенности интерпретации и связи с событиями, узлами и другими аргументами.

`ArgumentCitation` фиксирует только источник реконструкции позиции Александра: `VIDEO_ID`, начало, конец и редакционное описание фрагмента. Это доказательство того, что позиция прозвучала, но не доказательство внешнего исторического или юридического утверждения. Поле `references` хранит отдельные первичные источники для такой проверки.

Каждый аргумент автоматически становится узлом типа `claim` в графе. Его связи с документами, событиями и концептами имеют `interpretive` confidence, пока конкретная связь не подтверждена первичным документом.

### 7.2. Единая проекция статей

`src/data/articles.ts` не создаёт параллельный корпус. Он проецирует в каталог статей каждый `KnowledgeNode` с тем же стабильным `id`:

- узел события или документа получает полный материал из `EventRecord`;
- узел аргумента получает реконструкцию из `ArgumentRecord`;
- узел понятия получает редакционное введение из `KnowledgeNode.summary`, входящие и исходящие `KnowledgeRelation` и источники непосредственно связанных материалов.

Поэтому множество идентификаторов в Статьях и Связях должно полностью совпадать. Все элементы Хроно являются датированными статьями и узлами графа. Понятия и аргументы без собственной исторической даты не получают вымышленную дату: Хроно остаётся временной проекцией общего корпуса, а переходы из него ведут на тот же маршрут `/articles/:id`.

Каталог сортируется по `chronologyDate`. Для события или документа это собственная дата. Для понятия или аргумента — дата ближайшего связанного датированного узла; она показывается как «хронологический контекст» и не считается датой возникновения понятия или высказывания. Если на одинаковом расстоянии найдено несколько датированных узлов, берётся самый ранний.

Отображаемый номер статьи равен позиции в отсортированном `articlesData` и вычисляется заново при каждой сборке. При добавлении материала в 1953 год все последующие номера автоматически сдвигаются. Номер нельзя использовать как постоянный ключ или часть URL: постоянным идентификатором остаётся `id`.

Новые материалы добавляются в исходную сущность — событие, понятие или аргумент. Отдельно дублировать текст в реестре статей запрещено.

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
