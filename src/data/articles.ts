import type { ArticleRecord, ArticleRelation } from '../domain/types'
import { publicArticles } from './articles.public'

// This browser-facing module contains only the generated, publishable projection.
// Legacy editorial inputs and transcript-derived research stay in articleBuilder.ts,
// which is loaded by the Node generation script and never by the Vite application.
export const articlesData: ArticleRecord[] = publicArticles

export const articlesById = new Map(articlesData.map((article) => [article.id, article]))

export const articleNumberById = new Map(articlesData.map((article) => [article.id, article.number]))

export function articlePath(articleId: string): string {
  return `/articles/${articleId}`
}

export const articleRelations: ArticleRelation[] = articlesData.flatMap((article) => article.links.map((link) => ({
  id: `article-${article.id}-${link.articleId}`,
  source: article.id,
  target: link.articleId,
  label: link.label,
  note: link.note,
})))
