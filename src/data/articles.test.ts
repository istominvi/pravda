import { describe, expect, it } from 'vitest'
import { argumentsData } from './arguments'
import { articleNumberById, articlePath, articlesById, articlesData, sourcesForArticle } from './articles'
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

  it('numbers articles in chronological order and recalculates positions from the sorted registry', () => {
    expect(articlesData[0]?.id).toBe('un-charter')
    expect(articlesData.filter((article) => !article.chronologyDate).map((article) => article.id)).toEqual([])
    for (const [index, article] of articlesData.entries()) {
      expect(article.number).toBe(index + 1)
      expect(articleNumberById.get(article.id)).toBe(index + 1)
      if (index > 0) {
        expect(articlesData[index - 1]!.chronologyDate! <= article.chronologyDate!).toBe(true)
      }
    }

    const datedEventArticles = events.map((event) => articlesById.get(event.id)!)
    for (let index = 1; index < datedEventArticles.length; index += 1) {
      expect(datedEventArticles[index - 1]!.number < datedEventArticles[index]!.number).toBe(true)
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
