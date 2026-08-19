import { describe, expect, it } from 'vitest'
import {
  articleNumberById,
  articlePath,
  articleRelations,
  articlesById,
  articlesData,
} from './articles'

const languages = ['ru', 'en', 'uk'] as const
const forbiddenResearchUrl = /(?:youtube\.com|youtu\.be|github\.com\/.*transcripts?)/i
const forbiddenPublicText = /(?:Александр|Олександр|Alexander|собеседник|співрозмовник|interlocutor|interviewer|транскрипт|транскрипц|transcript|VIDEO_ID|\bASR\b|YouTube|Видеоформат|відеодискус|The videos distinguish|доступн(?:ый|ого|ом) материал|наявн(?:ий|ого|ому) матеріал|source material|interpretation confidence|уверенность интерпретации|впевненість інтерпретації|Рассматриваемая позиция|Розглянута позиція|The examined position|\b\d{1,2}:\d{2}\b)/i

function articleWordCount(article: (typeof articlesData)[number], language: typeof languages[number]): number {
  return [article.lead[language], ...article.sections.flatMap((section) => section.paragraphs[language])]
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length
}

describe('unified article registry', () => {
  it('contains exactly 85 uniquely identified articles', () => {
    expect(articlesData).toHaveLength(85)
    expect(new Set(articlesData.map((article) => article.id)).size).toBe(articlesData.length)
    expect(articlesById.size).toBe(articlesData.length)

    for (const article of articlesData) {
      expect(articlesById.get(article.id)).toBe(article)
      expect(articlePath(article.id)).toBe(`/articles/${article.id}`)
    }
  })

  it('numbers one chronological sequence shared by every view', () => {
    for (const [index, article] of articlesData.entries()) {
      expect(article.chronologyDate).toMatch(/^\d{4}-\d{2}-\d{2}(?:T.*Z)?$/)
      expect(Number.isNaN(Date.parse(article.chronologyDate))).toBe(false)
      expect(article.number).toBe(index + 1)
      expect(articleNumberById.get(article.id)).toBe(index + 1)
      if (index > 0) {
        expect(articlesData[index - 1]!.chronologyDate <= article.chronologyDate).toBe(true)
      }
    }
  })

  it('gives every article substantial multilingual structure', () => {
    for (const article of articlesData) {
      expect(article.sections.length, article.id).toBe(4)

      for (const language of languages) {
        expect(article.title[language].trim().length, `${article.id}:${language}:title`).toBeGreaterThan(0)
        expect(article.summary[language].trim().length, `${article.id}:${language}:summary`).toBeGreaterThan(0)
        expect(article.lead[language].trim().length, `${article.id}:${language}:lead`).toBeGreaterThan(0)
        expect(articleWordCount(article, language), `${article.id}:${language}:word-count`).toBeGreaterThanOrEqual(400)
      }

      for (const section of article.sections) {
        for (const language of languages) {
          expect(section.title[language].trim().length, `${article.id}:${language}:section-title`).toBeGreaterThan(0)
          expect(section.paragraphs[language].length, `${article.id}:${language}:paragraphs`).toBeGreaterThanOrEqual(2)
          for (const paragraph of section.paragraphs[language]) {
            expect(paragraph.trim().length, `${article.id}:${language}:paragraph`).toBeGreaterThan(0)
          }
        }
        expect(section.sourceUrls?.length, `${article.id}:section-sources`).toBeGreaterThanOrEqual(1)
        for (const url of section.sourceUrls ?? []) {
          expect(url).toMatch(/^https:\/\//)
          expect(url).not.toMatch(forbiddenResearchUrl)
          expect(article.sources.some((source) => source.url === url), `${article.id}:orphan-section-source`).toBe(true)
        }
      }
    }
  })

  it('uses at least one institutional HTTPS source per article and excludes research transcripts', () => {
    for (const article of articlesData) {
      expect(article.sources.length, article.id).toBeGreaterThanOrEqual(1)
      expect(new Set(article.sources.map((source) => source.url)).size, article.id).toBe(article.sources.length)

      for (const source of article.sources) {
        expect(source.title.trim().length, article.id).toBeGreaterThan(0)
        expect(source.institution.trim().length, article.id).toBeGreaterThan(0)
        expect(source.url).toMatch(/^https:\/\//)
        expect(source.url).not.toMatch(forbiddenResearchUrl)
      }
    }
  })

  it('links only to articles in the same registry', () => {
    for (const article of articlesData) {
      for (const link of article.links) {
        expect(articlesById.has(link.articleId), `${article.id} -> ${link.articleId}`).toBe(true)
        for (const language of languages) {
          expect(link.label[language].trim().length).toBeGreaterThan(0)
          expect(link.note[language].trim().length).toBeGreaterThan(0)
        }
      }
    }

    expect(new Set(articleRelations.map((relation) => relation.id)).size).toBe(articleRelations.length)
    expect(new Set(articleRelations.map((relation) => (
      [relation.source, relation.target].sort().join('\u0000')
    ))).size).toBe(articleRelations.length)
    for (const relation of articleRelations) {
      expect(articlesById.has(relation.source), relation.id).toBe(true)
      expect(articlesById.has(relation.target), relation.id).toBe(true)
      expect(relation.source).not.toBe(relation.target)
      expect(
        articlesById.get(relation.source)?.links.some((link) => link.articleId === relation.target),
        relation.id,
      ).toBe(true)
    }
    for (const article of articlesData) {
      expect(
        articleRelations.some((relation) => relation.source === article.id || relation.target === article.id),
        `${article.id}:isolated`,
      ).toBe(true)
    }
  })

  it('does not expose internal transcript research or speaker metadata', () => {
    expect(JSON.stringify(articlesData)).not.toMatch(forbiddenPublicText)
  })
})
