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

export const articlesData: ArticleRecord[] = knowledgeNodes.map((node) => ({
  id: node.id,
  nodeId: node.id,
  kind: articleKind(node.id),
  title: node.title,
  eyebrow: node.eyebrow,
  summary: node.summary,
  date: node.date,
  eventId: node.eventId,
  argumentId: node.argumentId,
  tags: node.tags,
}))

export const articlesById = new Map(articlesData.map((article) => [article.id, article]))

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
