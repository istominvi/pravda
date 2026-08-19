export type Language = 'ru' | 'en' | 'uk'
export type Theme = 'light' | 'dark'

export type Localized<T = string> = Record<Language, T>

export interface SourceLink {
  title: string
  institution: string
  url: string
}

export interface ArticleSection {
  title: Localized
  paragraphs: Localized<string[]>
  sourceUrls?: string[]
}

export interface ArticleLink {
  articleId: string
  label: Localized
  note: Localized
}

export interface ArticleRecord {
  id: string
  number: number
  title: Localized
  summary: Localized
  lead: Localized
  chronologyDate: string
  sections: ArticleSection[]
  sources: SourceLink[]
  links: ArticleLink[]
}

export interface ArticleRelation {
  id: string
  source: string
  target: string
  label: Localized
  note: Localized
}

export type AISuggestionKind = 'clarify' | 'evidence' | 'boundary'

export interface AITopic {
  id: string
  title: Localized
  keywords: Record<Language, string[]>
  summary: Localized
  articleIds: string[]
  suggestions: Record<Language, Array<{
    kind: AISuggestionKind
    title: string
    text: string
  }>>
}

export interface DetectedTopic {
  topic: AITopic
  score: number
  matchedKeywords: string[]
}

// Internal editorial inputs. These legacy structures feed the article normalizer
// during the migration and must not be consumed by public views or graph code.
export interface MediaLink {
  title: string
  url: string
  type?: string
}

export interface EventMeta {
  place: Localized
  actors: Localized
  status: Localized
}

export interface EventRecord {
  id: string
  date: string
  lane?: number
  title: Localized
  short: Localized
  lead: Localized
  context: Localized<string[]>
  dispute: Localized<string[]>
  checks: Localized<string[]>
  meta: EventMeta
  tags: string[]
  sources: SourceLink[]
  media: MediaLink[]
}

export type KnowledgeNodeType =
  | 'document'
  | 'event'
  | 'concept'
  | 'claim'
  | 'question'

export interface KnowledgeNode {
  id: string
  type: KnowledgeNodeType
  title: Localized
  eyebrow: Localized
  summary: Localized
  date?: string
  eventId?: string
  argumentId?: string
  tags: string[]
  sourceUrls?: string[]
}

export type RelationKind =
  | 'legal-context'
  | 'reaffirms'
  | 'precedes'
  | 'political-context'
  | 'response'
  | 'implementation'
  | 'contested-link'
  | 'contradiction'
  | 'raises-question'

export interface KnowledgeRelation {
  id: string
  source: string
  target: string
  kind: RelationKind
  label: Localized
  note: Localized
  confidence: 'direct' | 'documented' | 'interpretive'
  sourceUrls?: string[]
}

export type InterpretationConfidence = 'high' | 'medium' | 'low'

export interface ArgumentCitation {
  videoId: string
  start: string
  end: string
  note: Localized
}

export interface ArgumentRecord {
  id: string
  title: Localized
  topic: Localized
  thesis: Localized
  premises: Localized<string[]>
  reasoning: Localized
  conclusion: Localized
  objection: Localized
  response: Localized
  limitations: Localized<string[]>
  interpretationConfidence: InterpretationConfidence
  relatedNodeIds: string[]
  relatedEventIds: string[]
  relatedArgumentIds: string[]
  citations: ArgumentCitation[]
  references: SourceLink[]
  tags: string[]
}
