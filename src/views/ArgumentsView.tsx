import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeftIcon, ExternalIcon, SearchIcon } from '../components/Icons'
import { argumentsById, argumentsData, transcriptUrl, youtubeTimestampUrl } from '../data/arguments'
import { eventsById } from '../data/events'
import { useAppStore } from '../store/useAppStore'
import { local, translate } from '../utils/i18n'

function confidenceLabel(confidence: 'high' | 'medium' | 'low', language: 'ru' | 'en' | 'uk'): string {
  const labels = {
    ru: { high: 'высокая', medium: 'средняя', low: 'низкая' },
    en: { high: 'high', medium: 'medium', low: 'low' },
    uk: { high: 'висока', medium: 'середня', low: 'низька' },
  }
  return labels[language][confidence]
}

export function ArgumentsView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const [search, setSearch] = useState('')
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    if (!query) return argumentsData
    return argumentsData.filter((argument) => (
      `${local(argument.title, language)} ${local(argument.topic, language)} ${local(argument.thesis, language)} ${argument.tags.join(' ')} ${argument.citations.map((item) => item.videoId).join(' ')}`
        .toLocaleLowerCase()
        .includes(query)
    ))
  }, [language, search])

  return (
    <section className="arguments-view">
      <div className="arguments-view-inner">
        <header className="arguments-heading">
          <span className="section-kicker">PRAVDA / {t('arguments')}</span>
          <h1>{t('argumentsTitle')}</h1>
          <p>{t('argumentsIntro')}</p>
          <label className="argument-search">
            <SearchIcon />
            <span className="sr-only">{t('findArgument')}</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t('findArgument')} />
          </label>
        </header>

        <div className="argument-list" aria-live="polite">
          {filtered.length === 0 && <p className="arguments-empty">{t('noArguments')}</p>}
          {filtered.map((argument, index) => (
            <button className="argument-card" type="button" key={argument.id} onClick={() => navigate(`/argument/${argument.id}`)}>
              <span className="argument-card-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="argument-card-copy">
                <small>{local(argument.topic, language)}</small>
                <strong>{local(argument.title, language)}</strong>
                <em>{local(argument.thesis, language)}</em>
              </span>
              <span className={`confidence-chip confidence-${argument.interpretationConfidence}`}>
                {t('confidence')}: {confidenceLabel(argument.interpretationConfidence, language)}
              </span>
              <span className="argument-card-sources">
                {argument.citations.map((item) => `${item.videoId} · ${item.start}–${item.end}`).join(' / ')}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArgumentView() {
  const navigate = useNavigate()
  const { argumentId } = useParams()
  const language = useAppStore((state) => state.language)
  const setMapFocusId = useAppStore((state) => state.setMapFocusId)
  const argument = argumentId ? argumentsById.get(argumentId) : undefined
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [argumentId])

  if (!argument) {
    return (
      <section className="not-found-view">
        <h1>404</h1>
        <p>{language === 'en' ? 'Argument not found.' : language === 'uk' ? 'Аргумент не знайдено.' : 'Аргумент не найден.'}</p>
        <button type="button" onClick={() => navigate('/arguments')}>{t('backToArguments')}</button>
      </section>
    )
  }

  const openGraph = () => {
    setMapFocusId(argument.id)
    navigate('/connections')
  }

  return (
    <article className="event-page argument-page">
      <div className="event-page-inner argument-page-inner">
        <button className="back-link" type="button" onClick={() => navigate('/arguments')}>
          <ArrowLeftIcon /> {t('backToArguments')}
        </button>

        <div className="event-article-grid">
          <div className="event-article-main">
            <div className="event-kicker">
              <span>{t('argument')}</span>
              <span>{local(argument.topic, language)}</span>
            </div>
            <h1>{local(argument.title, language)}</h1>
            <p className="event-lead">{local(argument.thesis, language)}</p>

            <div className="event-action-row argument-action-row">
              <button className="dark-button" type="button" onClick={openGraph}>{t('openConnections')}</button>
              <span className={`confidence-chip confidence-${argument.interpretationConfidence}`}>
                {t('confidence')}: {confidenceLabel(argument.interpretationConfidence, language)}
              </span>
            </div>

            <section className="event-section">
              <h2>{t('premises')}</h2>
              <ul className="argument-point-list">
                {local(argument.premises, language).map((premise) => <li key={premise}>{premise}</li>)}
              </ul>
            </section>

            <section className="event-section">
              <h2>{t('reasoning')}</h2>
              <div><p>{local(argument.reasoning, language)}</p></div>
            </section>

            <section className="event-section argument-two-column">
              <h2>{t('conclusion')}</h2>
              <div><p>{local(argument.conclusion, language)}</p></div>
            </section>

            <section className="argument-dialogue-grid">
              <div>
                <span>{t('objection')}</span>
                <p>{local(argument.objection, language)}</p>
              </div>
              <div>
                <span>{t('response')}</span>
                <p>{local(argument.response, language)}</p>
              </div>
            </section>

            <section className="event-section">
              <h2>{t('limitations')}</h2>
              <ul className="verify-list">
                {local(argument.limitations, language).map((limitation) => <li key={limitation}>{limitation}</li>)}
              </ul>
            </section>

            <section className="event-section">
              <h2>{t('transcriptEvidence')}</h2>
              <div className="transcript-citation-list">
                {argument.citations.map((item) => (
                  <article key={`${item.videoId}-${item.start}`}>
                    <div>
                      <span>VIDEO_ID</span>
                      <strong>{item.videoId}</strong>
                      <small>{item.start}–{item.end} · Александр</small>
                    </div>
                    <p>{local(item.note, language)}</p>
                    <div className="citation-actions">
                      <a href={youtubeTimestampUrl(item.videoId, item.start)} target="_blank" rel="noreferrer">
                        YouTube · {item.start} <ExternalIcon />
                      </a>
                      <a href={transcriptUrl(item.videoId)} target="_blank" rel="noreferrer">
                        Markdown <ExternalIcon />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {argument.references.length > 0 && (
              <section className="event-section">
                <h2>{t('primarySources')}</h2>
                <div className="source-list">
                  {argument.references.map((source, sourceIndex) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      <span className="source-number">{String(sourceIndex + 1).padStart(2, '0')}</span>
                      <span><strong>{source.title}</strong><small>{source.institution}</small></span>
                      <ExternalIcon />
                    </a>
                  ))}
                </div>
              </section>
            )}

            <section className="event-section">
              <h2>{t('relatedMaterials')}</h2>
              <div className="related-materials">
                {argument.relatedEventIds.map((eventId) => {
                  const event = eventsById.get(eventId)
                  if (!event) return null
                  return (
                    <button type="button" key={eventId} onClick={() => navigate(`/event/${eventId}`)}>
                      <small>{t('event')}</small>
                      <strong>{local(event.title, language)}</strong>
                    </button>
                  )
                })}
                {argument.relatedArgumentIds.map((relatedId) => {
                  const related = argumentsById.get(relatedId)
                  if (!related) return null
                  return (
                    <button type="button" key={relatedId} onClick={() => navigate(`/argument/${relatedId}`)}>
                      <small>{t('argument')}</small>
                      <strong>{local(related.title, language)}</strong>
                    </button>
                  )
                })}
              </div>
            </section>

            <div className="tag-row argument-tags">
              {argument.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
