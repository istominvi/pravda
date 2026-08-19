import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, SearchIcon } from '../components/Icons'
import { articlePath, articlesById, articlesData, sourcesForArticle } from '../data/articles'
import { argumentsById, transcriptUrl, youtubeTimestampUrl } from '../data/arguments'
import { eventsById } from '../data/events'
import { knowledgeNodesById, knowledgeRelations } from '../data/knowledge'
import type { ArticleKind, KnowledgeRelation, Language } from '../domain/types'
import { useAppStore } from '../store/useAppStore'
import { languageLocale, local, translate } from '../utils/i18n'

const PAGE_SIZE = 9

function confidenceLabel(confidence: 'high' | 'medium' | 'low', language: Language): string {
  const labels = {
    ru: { high: 'высокая', medium: 'средняя', low: 'низкая' },
    en: { high: 'high', medium: 'medium', low: 'low' },
    uk: { high: 'висока', medium: 'середня', low: 'низька' },
  }
  return labels[language][confidence]
}

function relationConfidenceLabel(confidence: KnowledgeRelation['confidence'], language: Language): string {
  const labels = {
    ru: { direct: 'прямая', documented: 'документированная', interpretive: 'интерпретационная' },
    en: { direct: 'direct', documented: 'documented', interpretive: 'interpretive' },
    uk: { direct: 'пряма', documented: 'документована', interpretive: 'інтерпретаційна' },
  }
  return labels[language][confidence]
}

function kindLabel(kind: ArticleKind, language: Language): string {
  const labels = {
    ru: { event: 'Событие', document: 'Документ', concept: 'Понятие', argument: 'Аргумент' },
    en: { event: 'Event', document: 'Document', concept: 'Concept', argument: 'Argument' },
    uk: { event: 'Подія', document: 'Документ', concept: 'Поняття', argument: 'Аргумент' },
  }
  return labels[language][kind]
}

function articleSearchText(articleId: string, language: Language): string {
  const article = articlesById.get(articleId)
  if (!article) return ''
  const event = article.eventId ? eventsById.get(article.eventId) : undefined
  const argument = article.argumentId ? argumentsById.get(article.argumentId) : undefined
  return [
    local(article.title, language),
    local(article.eyebrow, language),
    local(article.summary, language),
    article.tags.join(' '),
    event ? local(event.lead, language) : '',
    event ? local(event.context, language).join(' ') : '',
    event ? local(event.dispute, language).join(' ') : '',
    argument ? local(argument.topic, language) : '',
    argument ? local(argument.reasoning, language) : '',
    argument ? argument.citations.map((citation) => citation.videoId).join(' ') : '',
  ].join(' ').toLocaleLowerCase()
}

export function ArticlesView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const [search, setSearch] = useState('')
  const [kind, setKind] = useState<ArticleKind | 'all'>('all')
  const [page, setPage] = useState(1)
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    return articlesData.filter((article) => {
      if (kind !== 'all' && article.kind !== kind) return false
      return !query || articleSearchText(article.id, language).includes(query)
    })
  }, [kind, language, search])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const updateSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const updateKind = (value: ArticleKind | 'all') => {
    setKind(value)
    setPage(1)
  }

  return (
    <section className="arguments-view articles-view">
      <div className="arguments-view-inner">
        <header className="arguments-heading articles-heading">
          <span className="section-kicker">PRAVDA / {t('articles')}</span>
          <h1>{t('articlesTitle')}</h1>
          <p>{t('articlesIntro')}</p>
          <div className="article-catalog-controls">
            <label className="argument-search">
              <SearchIcon />
              <span className="sr-only">{t('findArticle')}</span>
              <input value={search} onChange={(event) => updateSearch(event.target.value)} placeholder={t('findArticle')} />
            </label>
            <label className="article-kind-filter">
              <span className="sr-only">{t('articleType')}</span>
              <select value={kind} onChange={(event) => updateKind(event.target.value as ArticleKind | 'all')}>
                <option value="all">{t('allArticles')}</option>
                <option value="event">{kindLabel('event', language)}</option>
                <option value="document">{kindLabel('document', language)}</option>
                <option value="concept">{kindLabel('concept', language)}</option>
                <option value="argument">{kindLabel('argument', language)}</option>
              </select>
            </label>
          </div>
        </header>

        <div className="article-catalog-meta">
          <span>{filtered.length} {t('articleCount')}</span>
          <span>{currentPage} / {pageCount}</span>
        </div>

        <div className="argument-list article-list" aria-live="polite">
          {visible.length === 0 && <p className="arguments-empty">{t('noArticles')}</p>}
          {visible.map((article) => {
            const globalIndex = articlesData.findIndex((item) => item.id === article.id) + 1
            const sourceCount = sourcesForArticle(article.id).length
            return (
              <button className="argument-card article-card" type="button" key={article.id} onClick={() => navigate(articlePath(article.id))}>
                <span className="argument-card-index">{String(globalIndex).padStart(2, '0')}</span>
                <span className="argument-card-copy">
                  <small>{kindLabel(article.kind, language)} · {local(article.eyebrow, language)}</small>
                  <strong>{local(article.title, language)}</strong>
                  <em>{local(article.summary, language)}</em>
                </span>
                <span className="article-card-meta">
                  {article.date && <time dateTime={article.date}>{article.date.slice(0, 4)}</time>}
                  <span>{sourceCount} {t('sourceCount')}</span>
                </span>
              </button>
            )
          })}
        </div>

        {pageCount > 1 && (
          <nav className="article-list-pagination" aria-label={t('articlePagination')}>
            <button type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} aria-label={t('previous')}>
              <ArrowLeftIcon />
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <button
                type="button"
                key={pageNumber}
                className={pageNumber === currentPage ? 'is-active' : ''}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
                onClick={() => setPage(pageNumber)}
              >
                {String(pageNumber).padStart(2, '0')}
              </button>
            ))}
            <button type="button" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} aria-label={t('next')}>
              <ArrowRightIcon />
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}

function ArticleRelations({ articleId }: { articleId: string }) {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)
  const relations = knowledgeRelations.filter((relation) => relation.source === articleId || relation.target === articleId)
  const incoming = relations.filter((relation) => relation.target === articleId)
  const outgoing = relations.filter((relation) => relation.source === articleId)

  const renderRelation = (relation: KnowledgeRelation) => {
    const otherId = relation.source === articleId ? relation.target : relation.source
    const other = knowledgeNodesById.get(otherId)
    if (!other) return null
    return (
      <button type="button" key={relation.id} onClick={() => navigate(articlePath(other.id))}>
        <span className={`relation-confidence confidence-${relation.confidence}`} />
        <span>
          <small>{relationConfidenceLabel(relation.confidence, language)} · {local(relation.label, language)}</small>
          <strong>{local(other.title, language)}</strong>
          <em>{local(relation.note, language)}</em>
        </span>
      </button>
    )
  }

  return (
    <section className="event-section article-relations-section">
      <h2>{t('articleConnections')}</h2>
      <div className="article-relations-grid">
        <div>
          <h3>{t('incoming')}</h3>
          <div className="article-relation-list">{incoming.length ? incoming.map(renderRelation) : <p>—</p>}</div>
        </div>
        <div>
          <h3>{t('outgoing')}</h3>
          <div className="article-relation-list">{outgoing.length ? outgoing.map(renderRelation) : <p>—</p>}</div>
        </div>
      </div>
    </section>
  )
}

export function ArticleView() {
  const navigate = useNavigate()
  const { articleId } = useParams()
  const language = useAppStore((state) => state.language)
  const setMapFocusId = useAppStore((state) => state.setMapFocusId)
  const article = articleId ? articlesById.get(articleId) : undefined
  const event = article?.eventId ? eventsById.get(article.eventId) : undefined
  const argument = article?.argumentId ? argumentsById.get(article.argumentId) : undefined
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [articleId])

  if (!article) {
    return (
      <section className="not-found-view">
        <h1>404</h1>
        <p>{t('articleNotFound')}</p>
        <button type="button" onClick={() => navigate('/articles')}>{t('backToArticles')}</button>
      </section>
    )
  }

  const index = articlesData.findIndex((item) => item.id === article.id)
  const previous = index > 0 ? articlesData[index - 1] : undefined
  const next = index < articlesData.length - 1 ? articlesData[index + 1] : undefined
  const sources = sourcesForArticle(article.id)
  const relations = knowledgeRelations.filter((relation) => relation.source === article.id || relation.target === article.id)
  const formattedDate = article.date
    ? new Intl.DateTimeFormat(languageLocale(language), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.date))
    : undefined

  const openGraph = () => {
    setMapFocusId(article.nodeId)
    navigate('/connections')
  }

  return (
    <article className={`event-page article-page article-kind-${article.kind}${argument ? ' argument-page' : ''}`}>
      <div className="event-page-inner argument-page-inner">
        <button className="back-link" type="button" onClick={() => navigate('/articles')}>
          <ArrowLeftIcon /> {t('backToArticles')}
        </button>

        <div className="event-article-grid">
          <div className="event-article-main">
            <div className="event-kicker">
              <span>{kindLabel(article.kind, language)}</span>
              <span>{formattedDate ?? local(article.eyebrow, language)}</span>
            </div>
            <h1>{local(article.title, language)}</h1>
            <p className="event-lead">{event ? local(event.lead, language) : local(article.summary, language)}</p>

            <div className="event-action-row argument-action-row">
              <button className="dark-button" type="button" onClick={openGraph}>{t('openConnections')}</button>
              <span>{relations.length} {t('relationCount')} · {sources.length} {t('sourceCount')}</span>
              {argument && (
                <span className={`confidence-chip confidence-${argument.interpretationConfidence}`}>
                  {t('confidence')}: {confidenceLabel(argument.interpretationConfidence, language)}
                </span>
              )}
            </div>

            {event && (
              <>
                <section className="event-section">
                  <h2>{t('context')}</h2>
                  <div>{local(event.context, language).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
                <section className="event-section">
                  <h2>{t('dispute')}</h2>
                  <div>{local(event.dispute, language).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
                <section className="event-section">
                  <h2>{t('verify')}</h2>
                  <ul className="verify-list">{local(event.checks, language).map((check) => <li key={check}>{check}</li>)}</ul>
                </section>
              </>
            )}

            {argument && (
              <>
                <section className="event-section">
                  <h2>{t('premises')}</h2>
                  <ul className="argument-point-list">{local(argument.premises, language).map((premise) => <li key={premise}>{premise}</li>)}</ul>
                </section>
                <section className="event-section">
                  <h2>{t('reasoning')}</h2>
                  <div><p>{local(argument.reasoning, language)}</p></div>
                </section>
                <section className="event-section">
                  <h2>{t('conclusion')}</h2>
                  <div><p>{local(argument.conclusion, language)}</p></div>
                </section>
                <section className="argument-dialogue-grid">
                  <div><span>{t('objection')}</span><p>{local(argument.objection, language)}</p></div>
                  <div><span>{t('response')}</span><p>{local(argument.response, language)}</p></div>
                </section>
                <section className="event-section">
                  <h2>{t('limitations')}</h2>
                  <ul className="verify-list">{local(argument.limitations, language).map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
                </section>
                <section className="event-section">
                  <h2>{t('transcriptEvidence')}</h2>
                  <div className="transcript-citation-list">
                    {argument.citations.map((citation) => (
                      <article key={`${citation.videoId}-${citation.start}`}>
                        <div><span>VIDEO_ID</span><strong>{citation.videoId}</strong><small>{citation.start}–{citation.end} · Александр</small></div>
                        <p>{local(citation.note, language)}</p>
                        <div className="citation-actions">
                          <a href={youtubeTimestampUrl(citation.videoId, citation.start)} target="_blank" rel="noreferrer">YouTube · {citation.start} <ExternalIcon /></a>
                          <a href={transcriptUrl(citation.videoId)} target="_blank" rel="noreferrer">Markdown <ExternalIcon /></a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </>
            )}

            {!event && !argument && (
              <>
                <section className="event-section">
                  <h2>{t('articleOverview')}</h2>
                  <div>
                    <p>{local(article.summary, language)}</p>
                    <p>{t('conceptArticleMethod')}</p>
                  </div>
                </section>
                <section className="event-section">
                  <h2>{t('verify')}</h2>
                  <ul className="verify-list">
                    <li>{t('conceptCheckSource')}</li>
                    <li>{t('conceptCheckConfidence')}</li>
                    <li>{t('conceptCheckStandard')}</li>
                  </ul>
                </section>
              </>
            )}

            <ArticleRelations articleId={article.id} />

            {sources.length > 0 && (
              <section className="event-section" id="sources">
                <h2>{article.kind === 'concept' ? t('relatedSources') : t('primarySources')}</h2>
                <div className="source-list">
                  {sources.map((source, sourceIndex) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      <span className="source-number">{String(sourceIndex + 1).padStart(2, '0')}</span>
                      <span><strong>{source.title}</strong><small>{source.institution}</small></span>
                      <ExternalIcon />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {event && (
              <section className="event-section">
                <h2>{t('media')}</h2>
                {event.media.length ? (
                  <div className="media-grid">
                    {event.media.map((item) => (
                      <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
                        <small>{item.type ?? 'media'}</small><strong>{item.title}</strong><ExternalIcon />
                      </a>
                    ))}
                  </div>
                ) : <p className="muted-copy">{t('noMedia')}</p>}
              </section>
            )}

            <div className="tag-row argument-tags">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>

        <nav className="event-pagination" aria-label={t('adjacentArticles')}>
          <button type="button" disabled={!previous} onClick={() => previous && navigate(articlePath(previous.id))}>
            <ArrowLeftIcon />
            <span><small>{t('previousArticle')}</small><strong>{previous ? local(previous.title, language) : '—'}</strong></span>
          </button>
          <button type="button" disabled={!next} onClick={() => next && navigate(articlePath(next.id))}>
            <span><small>{t('nextArticle')}</small><strong>{next ? local(next.title, language) : '—'}</strong></span>
            <ArrowRightIcon />
          </button>
        </nav>
      </div>
    </article>
  )
}
