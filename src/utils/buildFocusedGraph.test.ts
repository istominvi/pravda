import { describe, expect, it } from 'vitest'
import { buildFocusedKnowledgeGraph } from './buildFocusedGraph'

describe('buildFocusedKnowledgeGraph', () => {
  it('contains the focus node exactly once', () => {
    const graph = buildFocusedKnowledgeGraph('budapest', 2)
    expect(graph.nodes.filter((node) => node.id === graph.focus.id)).toHaveLength(1)
    expect(graph.nodes.find((node) => node.id === graph.focus.id)?.active).toBe(true)
  })

  it('does not include second-order nodes at depth one', () => {
    const graph = buildFocusedKnowledgeGraph('budapest', 1)
    expect(graph.nodes.every((node) => !node.secondary)).toBe(true)
    expect(graph.relations.every((relation) => !relation.secondary)).toBe(true)
  })

  it('uses unique node ids and valid edge endpoints', () => {
    const graph = buildFocusedKnowledgeGraph('minsk', 2)
    const nodeIds = graph.nodes.map((node) => node.id)
    const idSet = new Set(nodeIds)
    expect(idSet.size).toBe(nodeIds.length)
    for (const { relation } of graph.relations) {
      expect(idSet.has(relation.source)).toBe(true)
      expect(idSet.has(relation.target)).toBe(true)
    }
  })

  it('falls back to the default node for an unknown focus', () => {
    expect(buildFocusedKnowledgeGraph('missing-node', 1).focus.id).toBe('budapest')
  })
})
