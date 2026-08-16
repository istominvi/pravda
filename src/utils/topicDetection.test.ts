import { describe, expect, it } from 'vitest'
import { detectTopics } from './topicDetection'

describe('detectTopics', () => {
  it('detects a Russian-language Budapest Memorandum discussion', () => {
    const result = detectTopics('Давайте откроем Будапештский меморандум и обсудим гарантии безопасности.', 'ru')
    expect(result[0]?.topic.id).toBe('budapest')
    expect(result[0]?.matchedKeywords).toContain('будапешт')
  })

  it('detects equivalent English and Ukrainian topic keywords', () => {
    expect(detectTopics('The Bucharest declaration and NATO enlargement changed the security debate.', 'en')[0]?.topic.id).toBe('nato')
    expect(detectTopics('Кримський референдум і питання самовизначення.', 'uk')[0]?.topic.id).toBe('crimea')
  })

  it('can detect more than one conversation branch', () => {
    const result = detectTopics('После Майдана и смены власти возник спор о Крыме и референдуме.', 'ru')
    const ids = result.map((item) => item.topic.id)
    expect(ids).toContain('power-2014')
    expect(ids).toContain('crimea')
  })

  it('returns an empty array for empty input', () => {
    expect(detectTopics(' ', 'ru')).toEqual([])
  })
})
