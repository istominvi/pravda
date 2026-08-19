import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, SearchIcon } from '../components/Icons'
import { articleNumberById, articlePath, articleRelations, articlesById, articlesData } from '../data/articles'
import { useAppStore } from '../store/useAppStore'
import { languageLocale, local, translate } from '../utils/i18n'

const PAGE_SIZE = 9

type ArticleSort = 'number-asc' | 'number-desc' | 'title'
type ArticleRelation = (typeof articleRelations)[number]

function articleSearchText(articleId: string, language: ReturnType<typeof useAppStore.getState>['language']): string {
  const article = articlesById.get(articleId)
  if (!article) return ''
  return [
    local(article.title, language),
    local(article.summary, language),
    local(article.lead, language),
    ...article.sections.flatMap((section) => [
      local(section.title, language),
      ...local(section.paragraphs, language),
    ]),
  ].join(' ').toLocaleLowerCase()
}

function sortArticles(
  articles: typeof articlesData,
  sort: ArticleSort,
  language: ReturnType<typeof useAppStore.getState>['language'],
) {
  return [...articles].sort((left, right) => {
    if (sort === 'number-desc') return right.number - left.number
    if (sort === 'title') return local(left.title, language).localeCompare(local(right.title, language), languageLocale(language))
    return left.number - right.number
  })
}

export function ArticlesView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<ArticleSort>('number-asc')
  const [page, setPage] = useState(1)
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    const matching = query
      ? articlesData.filter((article) => articleSearchText(article.id, language).includes(query))
      : articlesData
    return sortArticles(matching, sort, language)
  }, [language, search, sort])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const updateSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const updateSort = (value: ArticleSort) => {
    setSort(value)
    setPage(1)
  }

  return (
    <section className="articles-view">
      <div className="articles-view-inner">
        <header className="articles-heading">
          <span className="section-kicker">PRAVDA / {t('articles')}</span>
          <h1>{t('articlesTitle')}</h1>
          <p>{t('articlesIntro')}</p>
          <div className="article-catalog-controls">
            <label className="article-search">
              <SearchIcon />
              <span className="sr-only">{t('findArticle')}</span>
              <input value={search} onChange={(event) => updateSearch(event.target.value)} placeholder={t('findArticle')} />
            </label>
            <label className="article-sort-control">
              <span className="sr-only">{t('sortArticles')}</span>
              <select value={sort} onChange={(event) => updateSort(event.target.value as ArticleSort)}>
                <option value="number-asc">{t('sortNumberAsc')}</option>
                <option value="number-desc">{t('sortNumberDesc')}</option>
                <option value="title">{t('sortTitle')}</option>
              </select>
            </label>
          </div>
        </header>

        <div className="article-catalog-meta">
          <span>{filtered.length} {t('articleCount')} · {t(sort === 'number-asc' ? 'sortNumberAsc' : sort === 'number-desc' ? 'sortNumberDesc' : 'sortTitle')}</span>
          <span>{currentPage} / {pageCount}</span>
        </div>

        <div className="article-list" aria-live="polite">
          {visible.length === 0 && <p className="articles-empty">{t('noArticles')}</p>}
          {visible.map((article) => (
            <button className="article-card" type="button" key={article.id} onClick={() => navigate(articlePath(article.id))}>
              <span className="article-card-index">№ {String(article.number).padStart(2, '0')}</span>
              <span className="article-card-copy">
                <strong>{local(article.title, language)}</strong>
                <em>{local(article.summary, language)}</em>
              </span>
              <span className="article-card-meta">
                <time dateTime={article.chronologyDate}>{article.chronologyDate.slice(0, 4)}</time>
              </span>
            </button>
          ))}
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
  const relations = articleRelations.filter((relation) => relation.source === articleId || relation.target === articleId)
  const incoming = relations.filter((relation) => relation.target === articleId)
  const outgoing = relations.filter((relation) => relation.source === articleId)

  const renderRelation = (relation: ArticleRelation) => {
    const otherId = relation.source === articleId ? relation.target : relation.source
    const other = articlesById.get(otherId)
    if (!other) return null
    return (
      <button type="button" key={relation.id} onClick={() => navigate(articlePath(other.id))}>
        <span>
          <small>№ {String(articleNumberById.get(other.id) ?? 0).padStart(2, '0')} · {local(relation.label, language)}</small>
          <strong>{local(other.title, language)}</strong>
          <em>{local(relation.note, language)}</em>
        </span>
      </button>
    )
  }

  if (relations.length === 0) return null

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

  const canonicalArticles = [...articlesData].sort((left, right) => left.number - right.number)
  const index = canonicalArticles.findIndex((item) => item.id === article.id)
  const previous = index > 0 ? canonicalArticles[index - 1] : undefined
  const next = index < canonicalArticles.length - 1 ? canonicalArticles[index + 1] : undefined
  const formattedDate = new Intl.DateTimeFormat(languageLocale(language), {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(article.chronologyDate))

  const openGraph = () => {
    setMapFocusId(article.id)
    navigate('/connections')
  }

  return (
    <article className="event-page article-page">
      <div className="event-page-inner">
        <button className="back-link" type="button" onClick={() => navigate('/articles')}>
          <ArrowLeftIcon /> {t('backToArticles')}
        </button>

        <div className="event-article-grid">
          <div className="event-article-main">
            <div className="event-kicker">
              <span>{t('article')} № {String(article.number).padStart(2, '0')}</span>
              <span>{formattedDate}</span>
            </div>
            <h1>{local(article.title, language)}</h1>
            <p className="event-lead">{local(article.lead, language)}</p>

            <div className="event-action-row">
              <button className="dark-button" type="button" onClick={openGraph}>{t('openConnections')}</button>
            </div>

            {article.sections.map((section, sectionIndex) => {
              const sectionSources = (section.sourceUrls ?? [])
                .map((url) => article.sources.find((source) => source.url === url))
                .filter((source): source is (typeof article.sources)[number] => Boolean(source))
              return (
                <section className="event-section" key={`${article.id}-section-${sectionIndex}`}>
                  <h2>{local(section.title, language)}</h2>
                  <div>
                    {local(section.paragraphs, language).map((paragraph, paragraphIndex) => (
                      <p key={`${article.id}-section-${sectionIndex}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                    {sectionSources.length > 0 && (
                      <div className="article-section-sources" aria-label={t('sectionSources')}>
                        {sectionSources.map((source) => (
                          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                            {source.title} <ExternalIcon />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )
            })}

            <ArticleRelations articleId={article.id} />

            {article.sources.length > 0 && (
              <section className="event-section" id="sources">
                <h2>{t('primarySources')}</h2>
                <div className="source-list">
                  {article.sources.map((source, sourceIndex) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      <span className="source-number">{String(sourceIndex + 1).padStart(2, '0')}</span>
                      <span><strong>{source.title}</strong><small>{source.institution}</small></span>
                      <ExternalIcon />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <nav className="event-pagination" aria-label={t('adjacentArticles')}>
          <button type="button" disabled={!previous} onClick={() => previous && navigate(articlePath(previous.id))}>
            <ArrowLeftIcon />
            <span><small>{t('previousArticle')}{previous ? ` · № ${String(previous.number).padStart(2, '0')}` : ''}</small><strong>{previous ? local(previous.title, language) : '—'}</strong></span>
          </button>
          <button type="button" disabled={!next} onClick={() => next && navigate(articlePath(next.id))}>
            <span><small>{t('nextArticle')}{next ? ` · № ${String(next.number).padStart(2, '0')}` : ''}</small><strong>{next ? local(next.title, language) : '—'}</strong></span>
            <ArrowRightIcon />
          </button>
        </nav>
      </div>
    </article>
  )
}
