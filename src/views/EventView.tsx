import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { events, eventsById } from '../data/events'
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon } from '../components/Icons'
import { useAppStore } from '../store/useAppStore'
import { languageLocale, local, translate } from '../utils/i18n'

export function EventView() {
  const navigate = useNavigate()
  const { eventId } = useParams()
  const language = useAppStore((state) => state.language)
  const setMapFocusId = useAppStore((state) => state.setMapFocusId)
  const event = eventId ? eventsById.get(eventId) : undefined
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [eventId])

  if (!event) {
    return (
      <section className="not-found-view">
        <h1>404</h1>
        <p>{language === 'en' ? 'Event not found.' : language === 'uk' ? 'Подію не знайдено.' : 'Событие не найдено.'}</p>
        <button type="button" onClick={() => navigate('/chrono')}>{t('backToChrono')}</button>
      </section>
    )
  }

  const index = events.findIndex((item) => item.id === event.id)
  const previous = index > 0 ? events[index - 1] : undefined
  const next = index < events.length - 1 ? events[index + 1] : undefined
  const locale = languageLocale(language)
  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(event.date))

  const openGraph = () => {
    setMapFocusId(event.id)
    navigate('/connections')
  }

  return (
    <article className="event-page">
      <div className="event-page-inner">
        <button className="back-link" type="button" onClick={() => navigate('/chrono')}>
          <ArrowLeftIcon /> {t('backToChrono')}
        </button>

        <div className="event-article-grid">
          <div className="event-article-main">
            <div className="event-kicker"><span>{t('event')}</span><span>{formattedDate}</span></div>
            <h1>{local(event.title, language)}</h1>
            <p className="event-lead">
              {local(event.lead, language)}
              {event.sources.map((_, sourceIndex) => <sup key={sourceIndex}><a href={`#source-${sourceIndex + 1}`}>[{sourceIndex + 1}]</a></sup>)}
            </p>

            <div className="event-action-row">
              <button className="dark-button" type="button" onClick={openGraph}>{t('openConnections')}</button>
              <span>{event.sources.length} {t('sourceCount')} · {event.tags.length} topics</span>
            </div>

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
              <ul className="verify-list">
                {local(event.checks, language).map((check) => <li key={check}>{check}</li>)}
              </ul>
            </section>

            <section className="event-section" id="sources">
              <h2>{t('sources')}</h2>
              <div className="source-list">
                {event.sources.map((source, sourceIndex) => (
                  <a id={`source-${sourceIndex + 1}`} href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                    <span className="source-number">{String(sourceIndex + 1).padStart(2, '0')}</span>
                    <span><strong>{source.title}</strong><small>{source.institution}</small></span>
                    <ExternalIcon />
                  </a>
                ))}
              </div>
            </section>

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
          </div>

          <aside className="event-infobox">
            <div className="infobox-head">
              <span>{t('event')}</span>
              <strong>{local(event.title, language)}</strong>
            </div>
            <dl>
              <div><dt>{t('date')}</dt><dd>{formattedDate}</dd></div>
              <div><dt>{t('place')}</dt><dd>{local(event.meta.place, language)}</dd></div>
              <div><dt>{t('actors')}</dt><dd>{local(event.meta.actors, language)}</dd></div>
              <div><dt>{t('status')}</dt><dd>{local(event.meta.status, language)}</dd></div>
            </dl>
            <div className="tag-row">
              {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </aside>
        </div>

        <nav className="event-pagination" aria-label="Adjacent events">
          <button type="button" disabled={!previous} onClick={() => previous && navigate(`/event/${previous.id}`)}>
            <ArrowLeftIcon />
            <span><small>{t('previous')}</small><strong>{previous ? local(previous.title, language) : '—'}</strong></span>
          </button>
          <button type="button" disabled={!next} onClick={() => next && navigate(`/event/${next.id}`)}>
            <span><small>{t('next')}</small><strong>{next ? local(next.title, language) : '—'}</strong></span>
            <ArrowRightIcon />
          </button>
        </nav>
      </div>
    </article>
  )
}
