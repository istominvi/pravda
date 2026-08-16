import { knowledgeNodesById, knowledgeRelations } from '../data/knowledge'
import type { KnowledgeNode, KnowledgeRelation } from '../domain/types'

export interface PositionedKnowledgeNode {
  id: string
  knowledgeNode: KnowledgeNode
  position: { x: number; y: number }
  active: boolean
  relationCount: number
  secondary: boolean
}

export interface PositionedKnowledgeRelation {
  relation: KnowledgeRelation
  secondary: boolean
}

export interface FocusedKnowledgeGraph {
  focus: KnowledgeNode
  nodes: PositionedKnowledgeNode[]
  relations: PositionedKnowledgeRelation[]
}

function spread(index: number, count: number, gap: number): number {
  return (index - (count - 1) / 2) * gap
}

function relationCount(nodeId: string): number {
  return knowledgeRelations.filter((relation) => relation.source === nodeId || relation.target === nodeId).length
}

function positionedNode(
  node: KnowledgeNode,
  x: number,
  y: number,
  active = false,
  secondary = false,
): PositionedKnowledgeNode {
  return {
    id: node.id,
    knowledgeNode: node,
    position: { x, y },
    active,
    relationCount: relationCount(node.id),
    secondary,
  }
}

export function buildFocusedKnowledgeGraph(focusId: string, depth: 1 | 2): FocusedKnowledgeGraph {
  const focus = knowledgeNodesById.get(focusId) ?? knowledgeNodesById.get('budapest')
  if (!focus) throw new Error('The knowledge graph needs a valid default focus node.')

  const incoming = knowledgeRelations.filter((relation) => relation.target === focus.id)
  const outgoing = knowledgeRelations.filter((relation) => relation.source === focus.id)
  const nodes: PositionedKnowledgeNode[] = [positionedNode(focus, 0, 0, true)]
  const relations: PositionedKnowledgeRelation[] = []
  const included = new Set([focus.id])

  incoming.forEach((relation, index) => {
    const node = knowledgeNodesById.get(relation.source)
    if (!node) return
    included.add(node.id)
    nodes.push(positionedNode(node, -440, spread(index, incoming.length, 176)))
    relations.push({ relation, secondary: false })
  })

  outgoing.forEach((relation, index) => {
    const node = knowledgeNodesById.get(relation.target)
    if (!node) return
    if (!included.has(node.id)) {
      included.add(node.id)
      nodes.push(positionedNode(node, 440, spread(index, outgoing.length, 176)))
    }
    relations.push({ relation, secondary: false })
  })

  if (depth === 2) {
    const directIncoming = incoming.map((relation) => relation.source)
    const directOutgoing = outgoing.map((relation) => relation.target)

    directIncoming.forEach((parentId, parentIndex) => {
      const candidates = knowledgeRelations
        .filter((relation) => relation.target === parentId && !included.has(relation.source))
        .slice(0, 3)

      candidates.forEach((relation, childIndex) => {
        const node = knowledgeNodesById.get(relation.source)
        if (!node || included.has(node.id)) return
        included.add(node.id)
        const parentY = spread(parentIndex, directIncoming.length, 176)
        nodes.push(positionedNode(node, -850, parentY + spread(childIndex, candidates.length, 138), false, true))
        relations.push({ relation, secondary: true })
      })
    })

    directOutgoing.forEach((parentId, parentIndex) => {
      const candidates = knowledgeRelations
        .filter((relation) => relation.source === parentId && !included.has(relation.target))
        .slice(0, 3)

      candidates.forEach((relation, childIndex) => {
        const node = knowledgeNodesById.get(relation.target)
        if (!node || included.has(node.id)) return
        included.add(node.id)
        const parentY = spread(parentIndex, directOutgoing.length, 176)
        nodes.push(positionedNode(node, 850, parentY + spread(childIndex, candidates.length, 138), false, true))
        relations.push({ relation, secondary: true })
      })
    })
  }

  return { focus, nodes, relations }
}
