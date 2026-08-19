import { describe, expect, it } from 'vitest'
import { articleRelations, articlesById, articlesData } from './articles'

const languages = ['ru', 'en', 'uk'] as const

describe('article graph data', () => {
  it('uses unique relation ids and valid article endpoints', () => {
    expect(new Set(articleRelations.map((relation) => relation.id)).size).toBe(articleRelations.length)

    for (const relation of articleRelations) {
      expect(articlesById.has(relation.source), `${relation.id}:source`).toBe(true)
      expect(articlesById.has(relation.target), `${relation.id}:target`).toBe(true)
      expect(relation.source).not.toBe(relation.target)
      for (const language of languages) {
        expect(relation.label[language].trim().length).toBeGreaterThan(0)
        expect(relation.note[language].trim().length).toBeGreaterThan(0)
      }
    }
  })

  it('does not leave an article isolated from the graph', () => {
    for (const article of articlesData) {
      expect(
        articleRelations.some((relation) => relation.source === article.id || relation.target === article.id),
        article.id,
      ).toBe(true)
    }
  })

  it('backs every article link with a graph relation', () => {
    for (const article of articlesData) {
      for (const link of article.links) {
        expect(
          articleRelations.some((relation) => (
            relation.source === article.id && relation.target === link.articleId
          ) || (
            relation.target === article.id && relation.source === link.articleId
          )),
          `${article.id} <-> ${link.articleId}`,
        ).toBe(true)
      }
    }
  })
})
