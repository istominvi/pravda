import { describe, expect, it } from 'vitest'
import { argumentsData, argumentVideoIds } from './arguments'
import { events } from './events'
import { knowledgeNodesById } from './knowledge'

describe('canonical transcript arguments', () => {
  it('uses unique argument ids and the thirty reviewed video ids', () => {
    expect(new Set(argumentsData.map((argument) => argument.id)).size).toBe(argumentsData.length)
    expect(argumentVideoIds).toEqual([
      '4x8stl4ZzdE',
      'LkHavUQ4nwc',
      'Ol0ue_sDD48',
      'wsqPJMI6noM',
      'g0wrgfZqVm4',
      '-GlUMn0YE1Q',
      'QJaaNbt62EA',
      'XzvQa4nB5LE',
      'ZCO6n5SsXwQ',
      'rVX-YnJht-4',
      'R0EoG5eVsOo',
      'lapcK0stuxA',
      'KxBa0Lt-Mok',
      'Q-iePxBnNTQ',
      '_gO2fCj04xU',
      'sf52Mzd6sss',
      'FzMfd4Y0FY8',
      'L-S-zI9CGOs',
      'UiyzcTNxSho',
      'KhamiqPbdHA',
      'iqJaKlLyg1k',
      'h1g_8rzhqps',
      'url6SajVXEg',
      'JKo3cmvTaNw',
      'nHsb1-k5M8o',
      'LMXxNA8cWEM',
      'd5rh2vhGNyE',
      'hchsw5sDcfg',
      'YIB-Z9HBA8w',
      'Hq6QtPJ2YxE',
    ])
  })

  it('keeps citations precise and inside the canonical corpus', () => {
    const videoIds = new Set<string>(argumentVideoIds)
    for (const argument of argumentsData) {
      expect(argument.citations.length).toBeGreaterThan(0)
      for (const citation of argument.citations) {
        expect(videoIds.has(citation.videoId)).toBe(true)
        expect(citation.start).toMatch(/^\d{2}:\d{2}:\d{2}$/)
        expect(citation.end).toMatch(/^\d{2}:\d{2}:\d{2}$/)
        expect(citation.start < citation.end).toBe(true)
      }
    }
  })

  it('references existing graph nodes, events, and arguments', () => {
    const eventIds = new Set(events.map((event) => event.id))
    const argumentIds = new Set(argumentsData.map((argument) => argument.id))
    for (const argument of argumentsData) {
      for (const nodeId of argument.relatedNodeIds) expect(knowledgeNodesById.has(nodeId)).toBe(true)
      for (const eventId of argument.relatedEventIds) expect(eventIds.has(eventId)).toBe(true)
      for (const argumentId of argument.relatedArgumentIds) expect(argumentIds.has(argumentId)).toBe(true)
    }
  })
})
