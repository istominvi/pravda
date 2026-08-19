import { describe, expect, it } from 'vitest'
import { aiTopics } from './aiKnowledge'
import { articlesById, articlesData } from './articles'

const forbiddenAIResearchText = /(?:Александр|Олександр|Alexander|\b(?:интервью|interview|видео|відео|video|ролик|monologue|монолог)\b|\b225(?:th|-м)?\b|\bВ его (?:нарративе|трактовке)\b|(?:^|[.!?]\s+)(?:Он|Він|He|His)\b|(?:^|[.!?]\s+)(?:В диалоге|У діалозі|У розмові|The interview|The exchange|In the \d+(?:st|nd|rd|th) example)\b)/imu

describe('public article model', () => {
  it('uses one article-id namespace in AI topics', () => {
    for (const topic of aiTopics) {
      expect(topic).not.toHaveProperty('nodeIds')
      expect(topic).not.toHaveProperty('sourceEventIds')
      expect(topic).not.toHaveProperty('argumentIds')
      expect(topic.articleIds.length, `${topic.id}:articleIds`).toBeGreaterThan(0)
      for (const articleId of topic.articleIds) {
        expect(articlesById.has(articleId), `${topic.id} -> ${articleId}`).toBe(true)
      }
    }
  })

  it('keeps internal interview framing out of public AI copy', () => {
    const publicText = aiTopics.flatMap((topic) => [
      ...Object.values(topic.title),
      ...Object.values(topic.summary),
      ...Object.values(topic.keywords).flat(),
      ...Object.values(topic.suggestions).flatMap((suggestions) => (
        suggestions.flatMap((suggestion) => [suggestion.title, suggestion.text])
      )),
    ]).join('\n')

    expect(publicText).not.toMatch(forbiddenAIResearchText)
  })

  it('does not expose legacy entity or transcript fields', () => {
    const legacyFields = [
      'kind',
      'nodeId',
      'eventId',
      'argumentId',
      'interpretationConfidence',
      'citations',
      'tags',
    ]

    for (const article of articlesData) {
      for (const field of legacyFields) expect(article).not.toHaveProperty(field)
    }
  })

  it('keeps the editorial research source out of published article prose', () => {
    const publishedCorpus = JSON.stringify(articlesData)
    expect(publishedCorpus).not.toMatch(/Александр|Олександр|Alexander/)
    expect(publishedCorpus).not.toMatch(/VIDEO_ID|каноническ(?:ий|ого) транскрипт|canonical transcript/i)
  })
})
