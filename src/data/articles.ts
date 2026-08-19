import type { ArticleKind, ArticleRecord, SourceLink } from '../domain/types'
import { argumentsById } from './arguments'
import { eventsById } from './events'
import { knowledgeNodes, knowledgeNodesById, knowledgeRelations } from './knowledge'

function articleKind(nodeId: string): ArticleKind {
  const node = knowledgeNodesById.get(nodeId)
  if (!node) return 'concept'
  if (node.argumentId) return 'argument'
  if (node.type === 'document') return 'document'
  if (node.eventId) return 'event'
  return 'concept'
}

interface ChronologyAnchor {
  date?: string
  nodeId?: string
  direct: boolean
}

const nodeOrder = new Map(knowledgeNodes.map((node, index) => [node.id, index]))

function chronologyAnchor(nodeId: string): ChronologyAnchor {
  const node = knowledgeNodesById.get(nodeId)
  if (!node) return { direct: false }
  if (node.date) return { date: node.date, nodeId: node.id, direct: true }

  const visited = new Set([nodeId])
  let frontier = [nodeId]
  while (frontier.length > 0) {
    const next: string[] = []
    for (const currentId of frontier) {
      for (const relation of knowledgeRelations) {
        const otherId = relation.source === currentId
          ? relation.target
          : relation.target === currentId
            ? relation.source
            : undefined
        if (otherId && !visited.has(otherId)) {
          visited.add(otherId)
          next.push(otherId)
        }
      }
    }

    const dated = next
      .map((candidateId) => knowledgeNodesById.get(candidateId))
      .filter((candidate) => candidate?.date)
      .sort((left, right) => {
        const byDate = left!.date!.localeCompare(right!.date!)
        return byDate || (nodeOrder.get(left!.id) ?? 0) - (nodeOrder.get(right!.id) ?? 0)
      })
    if (dated[0]?.date) return { date: dated[0].date, nodeId: dated[0].id, direct: false }
    frontier = next
  }

  return { direct: false }
}

const projectedArticles = knowledgeNodes.map((node) => {
  const anchor = chronologyAnchor(node.id)
  return {
    id: node.id,
    nodeId: node.id,
    number: 0,
    kind: articleKind(node.id),
    title: node.title,
    eyebrow: node.eyebrow,
    summary: node.summary,
    date: node.date,
    chronologyDate: anchor.date,
    chronologyAnchorId: anchor.nodeId,
    chronologyIsDirect: anchor.direct,
    eventId: node.eventId,
    argumentId: node.argumentId,
    tags: node.tags,
  }
}) satisfies ArticleRecord[]

export const articlesData: ArticleRecord[] = projectedArticles
  .sort((left, right) => {
    if (left.chronologyDate && right.chronologyDate) {
      const byDate = left.chronologyDate.localeCompare(right.chronologyDate)
      if (byDate) return byDate
    } else if (left.chronologyDate) return -1
    else if (right.chronologyDate) return 1

    if (left.chronologyIsDirect !== right.chronologyIsDirect) return left.chronologyIsDirect ? -1 : 1
    return (nodeOrder.get(left.id) ?? 0) - (nodeOrder.get(right.id) ?? 0)
  })
  .map((article, index) => ({ ...article, number: index + 1 }))

export const articlesById = new Map(articlesData.map((article) => [article.id, article]))

export const articleNumberById = new Map(articlesData.map((article) => [article.id, article.number]))

export function articlePath(articleId: string): string {
  return `/articles/${articleId}`
}

function linkedNodeIds(articleId: string, maxDepth: number): string[] {
  const visited = new Set([articleId])
  let frontier = [articleId]
  for (let depth = 0; depth < maxDepth; depth += 1) {
    const next: string[] = []
    for (const nodeId of frontier) {
      for (const relation of knowledgeRelations) {
        const other = relation.source === nodeId
          ? relation.target
          : relation.target === nodeId
            ? relation.source
            : undefined
        if (other && !visited.has(other)) {
          visited.add(other)
          next.push(other)
        }
      }
    }
    frontier = next
  }
  visited.delete(articleId)
  return [...visited]
}

function directSources(nodeId: string): SourceLink[] {
  const node = knowledgeNodesById.get(nodeId)
  if (!node) return []
  if (node.eventId) return eventsById.get(node.eventId)?.sources ?? []
  if (node.argumentId) return argumentsById.get(node.argumentId)?.references ?? []
  return (node.sourceUrls ?? []).map((url) => ({
    title: new URL(url).hostname,
    institution: 'External source',
    url,
  }))
}

export function sourcesForArticle(articleId: string): SourceLink[] {
  const article = articlesById.get(articleId)
  if (!article) return []

  const sourceNodeIds = article.kind === 'concept'
    ? [article.nodeId, ...linkedNodeIds(article.nodeId, 2)]
    : [article.nodeId]
  const unique = new Map<string, SourceLink>()
  for (const nodeId of sourceNodeIds) {
    for (const source of directSources(nodeId)) unique.set(source.url, source)
  }
  for (const relation of knowledgeRelations) {
    if (relation.source !== article.nodeId && relation.target !== article.nodeId) continue
    for (const url of relation.sourceUrls ?? []) {
      unique.set(url, { title: new URL(url).hostname, institution: 'Relation source', url })
    }
  }
  return [...unique.values()]
}
