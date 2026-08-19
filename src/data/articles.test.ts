import { describe, expect, it } from 'vitest'
import { argumentsData } from './arguments'
import { articlePath, articlesById, articlesData, sourcesForArticle } from './articles'
import { events } from './events'
import { knowledgeNodes } from './knowledge'

describe('unified article registry', () => {
  it('creates exactly one article for every knowledge node', () => {
    expect(articlesData).toHaveLength(knowledgeNodes.length)
    expect(new Set(articlesData.map((article) => article.id)).size).toBe(articlesData.length)
    expect(new Set(articlesData.map((article) => article.id))).toEqual(new Set(knowledgeNodes.map((node) => node.id)))
  })

  it('contains every Chrono event and every transcript argument', () => {
    for (const event of events) {
      const article = articlesById.get(event.id)
      expect(article?.eventId).toBe(event.id)
      expect(articlePath(event.id)).toBe(`/articles/${event.id}`)
    }
    for (const argument of argumentsData) {
      const article = articlesById.get(argument.id)
      expect(article?.argumentId).toBe(argument.id)
      expect(article?.kind).toBe('argument')
    }
  })

  it('deduplicates source links collected for articles', () => {
    for (const article of articlesData) {
      const sources = sourcesForArticle(article.id)
      expect(new Set(sources.map((source) => source.url)).size).toBe(sources.length)
      for (const source of sources) expect(source.url).toMatch(/^https:\/\//)
    }
  })
})
