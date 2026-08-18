import { describe, expect, it } from 'vitest'
import { events } from './events'
import { argumentsData } from './arguments'
import { knowledgeNodes, knowledgeNodesById, knowledgeRelations } from './knowledge'

describe('knowledge graph data', () => {
  it('uses unique node and relation ids', () => {
    expect(new Set(knowledgeNodes.map((node) => node.id)).size).toBe(knowledgeNodes.length)
    expect(new Set(knowledgeRelations.map((relation) => relation.id)).size).toBe(knowledgeRelations.length)
  })

  it('has valid relation endpoints', () => {
    for (const relation of knowledgeRelations) {
      expect(knowledgeNodesById.has(relation.source)).toBe(true)
      expect(knowledgeNodesById.has(relation.target)).toBe(true)
    }
  })

  it('keeps event-backed nodes linked to existing events', () => {
    const eventIds = new Set(events.map((event) => event.id))
    for (const node of knowledgeNodes) {
      if (node.eventId) expect(eventIds.has(node.eventId)).toBe(true)
    }
  })

  it('keeps argument-backed nodes linked to existing arguments', () => {
    const argumentIds = new Set(argumentsData.map((argument) => argument.id))
    for (const node of knowledgeNodes) {
      if (node.argumentId) expect(argumentIds.has(node.argumentId)).toBe(true)
    }
  })
})
