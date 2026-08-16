import type { DetectedTopic, Language } from '../domain/types'
import { aiTopics } from '../data/aiKnowledge'

function normalise(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[“”«»"'.,!?;:()[\]{}—–\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function detectTopics(text: string, language: Language): DetectedTopic[] {
  const haystack = ` ${normalise(text)} `
  if (haystack.trim().length < 3) return []

  return aiTopics
    .map((topic) => {
      const pool = [...topic.keywords[language], ...topic.keywords.ru]
      const matchedKeywords = [...new Set(pool)]
        .filter((keyword) => haystack.includes(normalise(keyword)))
      const score = matchedKeywords.reduce((total, keyword) => total + Math.max(1, normalise(keyword).split(' ').length), 0)
      return { topic, score, matchedKeywords }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
}
