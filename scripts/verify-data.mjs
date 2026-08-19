import path from 'node:path'
import process from 'node:process'
import { createServer } from 'vite'

const root = path.resolve(new URL('..', import.meta.url).pathname)

// Load the real TypeScript data module through Vite instead of scraping source
// formatting. This exercises the same import graph used by the application.
const vite = await createServer({
  root,
  logLevel: 'silent',
  appType: 'custom',
  server: { middlewareMode: true },
})
let articleRelations
let articlesData
try {
  ({ articleRelations, articlesData } = await vite.ssrLoadModule('/src/data/articles.ts'))
} finally {
  await vite.close()
}

const languages = ['ru', 'en', 'uk']
const forbiddenResearchUrl = /(?:youtube\.com|youtu\.be|github\.com\/.*transcripts?)/i
const forbiddenPublicText = /(?:Александр|Олександр|Alexander|собеседник|співрозмовник|interlocutor|interviewer|транскрипт|транскрипц|transcript|VIDEO_ID|\bASR\b|YouTube|Видеоформат|відеодискус|The videos distinguish|доступн(?:ый|ого|ом) материал|наявн(?:ий|ого|ому) матеріал|source material|interpretation confidence|уверенность интерпретации|впевненість інтерпретації|Рассматриваемая позиция|Розглянута позиція|The examined position|\b\d{1,2}:\d{2}\b)/i
const legacyFields = [
  'kind',
  'nodeId',
  'eventId',
  'argumentId',
  'interpretationConfidence',
  'citations',
  'tags',
]
const errors = []

const duplicateValues = (values) => values.filter((value, index) => values.indexOf(value) !== index)
const isLocalizedText = (value) => languages.every((language) => (
  typeof value?.[language] === 'string' && value[language].trim().length > 0
))
const isValidDate = (value) => (
  typeof value === 'string'
  && /^\d{4}-\d{2}-\d{2}(?:T.*Z)?$/.test(value)
  && !Number.isNaN(Date.parse(value))
)
const isAllowedSourceUrl = (url) => (
  typeof url === 'string' && /^https:\/\//.test(url) && !forbiddenResearchUrl.test(url)
)
const articleWordCount = (article, language) => (
  [article.lead[language], ...article.sections.flatMap((section) => section.paragraphs[language])]
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length
)

if (!Array.isArray(articlesData)) errors.push('articlesData must be an array')
if (!Array.isArray(articleRelations)) errors.push('articleRelations must be an array')

const articleIds = Array.isArray(articlesData) ? articlesData.map((article) => article.id) : []
const articleIdSet = new Set(articleIds)
const relationIds = Array.isArray(articleRelations) ? articleRelations.map((relation) => relation.id) : []
const relationPairs = Array.isArray(articleRelations)
  ? articleRelations.map((relation) => [relation.source, relation.target].sort().join('\u0000'))
  : []

if (articlesData.length !== 85) errors.push(`Expected 85 articles, found ${articlesData.length}`)
for (const duplicate of duplicateValues(articleIds)) errors.push(`Duplicate article id: ${duplicate}`)
for (const duplicate of duplicateValues(relationIds)) errors.push(`Duplicate relation id: ${duplicate}`)
for (const duplicate of duplicateValues(relationPairs)) errors.push(`Duplicate reciprocal article relation: ${duplicate}`)

for (const [index, article] of articlesData.entries()) {
  const prefix = `Article ${article.id ?? index}`
  if (!article.id || typeof article.id !== 'string') errors.push(`${prefix}: missing id`)
  if (article.number !== index + 1) errors.push(`${prefix}: expected number ${index + 1}, found ${article.number}`)
  if (!isValidDate(article.chronologyDate)) errors.push(`${prefix}: invalid chronologyDate`)
  if (index > 0 && articlesData[index - 1].chronologyDate > article.chronologyDate) {
    errors.push(`${prefix}: registry is not chronologically sorted`)
  }
  if (!isLocalizedText(article.title)) errors.push(`${prefix}: incomplete title`)
  if (!isLocalizedText(article.summary)) errors.push(`${prefix}: incomplete summary`)
  if (!isLocalizedText(article.lead)) errors.push(`${prefix}: incomplete lead`)
  for (const language of languages) {
    const minimumWords = 400
    const words = articleWordCount(article, language)
    if (words < minimumWords) errors.push(`${prefix}: ${language} body has ${words} words; expected ${minimumWords}`)
  }
  for (const field of legacyFields) if (field in article) errors.push(`${prefix}: exposes legacy field ${field}`)

  if (!Array.isArray(article.sections) || article.sections.length !== 4) {
    errors.push(`${prefix}: expected exactly 4 sections`)
  } else {
    for (const [sectionIndex, section] of article.sections.entries()) {
      if (!isLocalizedText(section.title)) errors.push(`${prefix}: section ${sectionIndex + 1} has incomplete title`)
      for (const language of languages) {
        if (!Array.isArray(section.paragraphs?.[language]) || section.paragraphs[language].length < 2) {
          errors.push(`${prefix}: section ${sectionIndex + 1} has fewer than 2 ${language} paragraphs`)
        } else if (section.paragraphs[language].some((paragraph) => typeof paragraph !== 'string' || !paragraph.trim())) {
          errors.push(`${prefix}: section ${sectionIndex + 1} has an empty ${language} paragraph`)
        }
      }
      if (!Array.isArray(section.sourceUrls) || section.sourceUrls.length === 0) {
        errors.push(`${prefix}: section ${sectionIndex + 1} has no inline institutional source`)
      }
      for (const url of section.sourceUrls ?? []) {
        if (!isAllowedSourceUrl(url)) errors.push(`${prefix}: forbidden or invalid section source ${url}`)
        if (!article.sources.some((source) => source.url === url)) {
          errors.push(`${prefix}: section source is absent from the article source list: ${url}`)
        }
      }
    }
  }

  if (!Array.isArray(article.sources) || article.sources.length === 0) {
    errors.push(`${prefix}: expected at least one institutional source`)
  } else {
    for (const source of article.sources) {
      if (!source.title?.trim() || !source.institution?.trim()) errors.push(`${prefix}: incomplete source metadata`)
      if (!isAllowedSourceUrl(source.url)) errors.push(`${prefix}: forbidden or invalid source ${source.url}`)
    }
    for (const duplicate of duplicateValues(article.sources.map((source) => source.url))) {
      errors.push(`${prefix}: duplicate source ${duplicate}`)
    }
  }

  if (!Array.isArray(article.links)) {
    errors.push(`${prefix}: links must be an array`)
  } else {
    for (const link of article.links) {
      if (!articleIdSet.has(link.articleId)) errors.push(`${prefix}: missing linked article ${link.articleId}`)
      if (!isLocalizedText(link.label) || !isLocalizedText(link.note)) errors.push(`${prefix}: incomplete link ${link.articleId}`)
    }
  }
}

for (const relation of articleRelations) {
  if (!articleIdSet.has(relation.source)) errors.push(`Relation ${relation.id}: missing source ${relation.source}`)
  if (!articleIdSet.has(relation.target)) errors.push(`Relation ${relation.id}: missing target ${relation.target}`)
  if (relation.source === relation.target) errors.push(`Relation ${relation.id}: self-loop is not allowed`)
  if (!isLocalizedText(relation.label) || !isLocalizedText(relation.note)) {
    errors.push(`Relation ${relation.id}: incomplete localized text`)
  }
  const sourceArticle = articlesData.find((article) => article.id === relation.source)
  if (!sourceArticle?.links.some((link) => link.articleId === relation.target)) {
    errors.push(`Relation ${relation.id}: no matching article link`)
  }
}

for (const articleId of articleIds) {
  if (!articleRelations.some((relation) => relation.source === articleId || relation.target === articleId)) {
    errors.push(`Isolated article: ${articleId}`)
  }
}

const publishedCorpus = JSON.stringify(articlesData)
if (forbiddenPublicText.test(publishedCorpus)) {
  errors.push('Published articles expose internal transcript, speaker, or confidence metadata')
}

if (errors.length) {
  console.error('PRAVDA data verification failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`PRAVDA data OK: ${articlesData.length} articles, ${articleRelations.length} relations.`)
