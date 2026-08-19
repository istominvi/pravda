import { articleRelations, articlesById, articlesData } from '../data/articles'
import type { ArticleRecord, ArticleRelation } from '../domain/types'

export interface PositionedArticleNode {
  id: string
  article: ArticleRecord
  position: { x: number; y: number }
  active: boolean
  relationCount: number
  secondary: boolean
}

export interface PositionedArticleRelation {
  relation: ArticleRelation
  secondary: boolean
}

export interface FocusedArticleGraph {
  focus: ArticleRecord
  nodes: PositionedArticleNode[]
  relations: PositionedArticleRelation[]
}

function spread(index: number, count: number, gap: number): number {
  return (index - (count - 1) / 2) * gap
}

function relationCount(articleId: string): number {
  return articleRelations.filter((relation) => relation.source === articleId || relation.target === articleId).length
}

function positionedNode(
  article: ArticleRecord,
  x: number,
  y: number,
  active = false,
  secondary = false,
): PositionedArticleNode {
  return {
    id: article.id,
    article,
    position: { x, y },
    active,
    relationCount: relationCount(article.id),
    secondary,
  }
}

export function buildFocusedKnowledgeGraph(focusId: string, depth: 1 | 2): FocusedArticleGraph {
  const focus = articlesById.get(focusId) ?? articlesById.get('budapest') ?? articlesData[0]
  if (!focus) throw new Error('The article graph needs a valid default focus article.')

  const incoming = articleRelations.filter((relation) => relation.target === focus.id)
  const outgoing = articleRelations.filter((relation) => relation.source === focus.id)
  const nodes: PositionedArticleNode[] = [positionedNode(focus, 0, 0, true)]
  const relations: PositionedArticleRelation[] = []
  const included = new Set([focus.id])

  incoming.forEach((relation, index) => {
    const article = articlesById.get(relation.source)
    if (!article) return
    included.add(article.id)
    nodes.push(positionedNode(article, -440, spread(index, incoming.length, 176)))
    relations.push({ relation, secondary: false })
  })

  outgoing.forEach((relation, index) => {
    const article = articlesById.get(relation.target)
    if (!article) return
    if (!included.has(article.id)) {
      included.add(article.id)
      nodes.push(positionedNode(article, 440, spread(index, outgoing.length, 176)))
    }
    relations.push({ relation, secondary: false })
  })

  if (depth === 2) {
    const directIncoming = incoming.map((relation) => relation.source)
    const directOutgoing = outgoing.map((relation) => relation.target)

    directIncoming.forEach((parentId, parentIndex) => {
      const candidates = articleRelations
        .filter((relation) => relation.target === parentId && !included.has(relation.source))
        .slice(0, 3)

      candidates.forEach((relation, childIndex) => {
        const article = articlesById.get(relation.source)
        if (!article || included.has(article.id)) return
        included.add(article.id)
        const parentY = spread(parentIndex, directIncoming.length, 176)
        nodes.push(positionedNode(article, -850, parentY + spread(childIndex, candidates.length, 138), false, true))
        relations.push({ relation, secondary: true })
      })
    })

    directOutgoing.forEach((parentId, parentIndex) => {
      const candidates = articleRelations
        .filter((relation) => relation.source === parentId && !included.has(relation.target))
        .slice(0, 3)

      candidates.forEach((relation, childIndex) => {
        const article = articlesById.get(relation.target)
        if (!article || included.has(article.id)) return
        included.add(article.id)
        const parentY = spread(parentIndex, directOutgoing.length, 176)
        nodes.push(positionedNode(article, 850, parentY + spread(childIndex, candidates.length, 138), false, true))
        relations.push({ relation, secondary: true })
      })
    })
  }

  return { focus, nodes, relations }
}
