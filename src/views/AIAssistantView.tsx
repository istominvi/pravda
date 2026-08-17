import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { eventsById } from '../data/events'
import type { AISuggestionKind } from '../domain/types'
import { CopyIcon, MicrophoneIcon, SparkIcon, StopIcon } from '../components/Icons'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'
import { useAppStore } from '../store/useAppStore'
import { detectTopics } from '../utils/topicDetection'
import { local, translate } from '../utils/i18n'

const demoTranscripts = {
  ru: 'Собеседник: По Будапештскому меморандуму Запад обещал Украине полные гарантии безопасности. Александр: Давайте откроем текст и уточним, какой именно пункт предусматривает автоматическое военное вмешательство. Собеседник: Но Россия нарушила границы. Александр: Это отдельный и важный вопрос. Нужно различить содержание заверений, механизм исполнения и правовую оценку Крыма.',
  en: 'Speaker: Under the Budapest Memorandum the West promised Ukraine full security guarantees. Alexander: Let us open the text and identify which clause provides automatic military intervention. Speaker: But Russia violated the borders. Alexander: That is a separate and important issue. We should distinguish the assurances, enforcement mechanism and legal assessment of Crimea.',
  uk: 'Співрозмовник: За Будапештським меморандумом Захід обіцяв Україні повні гарантії безпеки. Олександр: Відкриймо текст і уточнімо, який саме пункт передбачає автоматичне військове втручання. Співрозмовник: Але Росія порушила кордони. Олександр: Це окреме й важливе питання. Треба розрізнити зміст запевнень, механізм виконання та правову оцінку Криму.',
}

const genericSuggestions = {
  ru: [
    { kind: 'clarify' as const, title: 'Уточнить тезис', text: 'Сформулируйте, пожалуйста, одно проверяемое утверждение: кто, когда, каким документом и что именно сделал?' },
    { kind: 'evidence' as const, title: 'Попросить источник', text: 'Давайте откроем первичный документ или полную стенограмму и проверим точную формулировку, а не пересказ.' },
    { kind: 'boundary' as const, title: 'Развести уровни', text: 'Причина, юридическое основание и моральная оценка — разные вопросы. Лучше проверить каждый отдельно.' },
  ],
  en: [
    { kind: 'clarify' as const, title: 'Clarify the claim', text: 'Please turn that into one testable claim: who did what, when, and under which document?' },
    { kind: 'evidence' as const, title: 'Ask for a source', text: 'Let us open the primary document or full transcript and check the exact wording rather than a paraphrase.' },
    { kind: 'boundary' as const, title: 'Separate levels', text: 'Cause, legal basis and moral assessment are different questions. Test each one separately.' },
  ],
  uk: [
    { kind: 'clarify' as const, title: 'Уточнити тезу', text: 'Сформулюйте, будь ласка, одне перевірюване твердження: хто, коли, яким документом і що саме зробив?' },
    { kind: 'evidence' as const, title: 'Попросити джерело', text: 'Відкриймо первинний документ або повну стенограму й перевірмо точне формулювання, а не переказ.' },
    { kind: 'boundary' as const, title: 'Розвести рівні', text: 'Причина, юридична підстава й моральна оцінка — різні питання. Краще перевірити кожне окремо.' },
  ],
}

function suggestionLabel(kind: AISuggestionKind, language: 'ru' | 'en' | 'uk'): string {
  const labels = {
    ru: { clarify: 'Уточнение', evidence: 'Документ', boundary: 'Граница вывода' },
    en: { clarify: 'Clarify', evidence: 'Evidence', boundary: 'Limit' },
    uk: { clarify: 'Уточнення', evidence: 'Документ', boundary: 'Межа висновку' },
  }
  return labels[language][kind]
}

export function AIAssistantView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const setMapFocusId = useAppStore((state) => state.setMapFocusId)
  const [consent, setConsent] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const speech = useSpeechRecognition(language)
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const analysisText = `${speech.transcript} ${speech.interim}`.trim()
  const detected = useMemo(() => detectTopics(analysisText, language), [analysisText, language])
  const suggestions = detected[0]?.topic.suggestions[language] ?? genericSuggestions[language]
  const lastExcerpt = analysisText.length > 210 ? `…${analysisText.slice(-210)}` : analysisText

  const toggleListening = () => {
    if (speech.listening) speech.stop()
    else if (consent) speech.start()
  }

  const runDemo = () => {
    if (speech.listening) speech.stop()
    speech.setTranscript(demoTranscripts[language])
  }

  const copySuggestion = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      window.setTimeout(() => setCopied((current) => current === key ? null : current), 1400)
    } catch {
      setCopied(null)
    }
  }

  const openTopicGraph = (nodeId: string) => {
    setMapFocusId(nodeId)
    navigate('/connections')
  }

  return (
    <section className="ai-view">
      <div className="ai-topline">
        <div>
          <span className="section-kicker">PRAVDA / AI <em>{t('pro')}</em></span>
          <h1>{t('aiTitle')}</h1>
          <p>{t('aiIntro')}</p>
        </div>
        <div className="ai-prototype-chip">
          <SparkIcon />
          <span><strong>{t('aiPrototype')}</strong><small>{t('aiPrototypeNote')}</small></span>
        </div>
      </div>

      <div className="ai-workspace">
        <section className="transcript-panel">
          <div className="panel-head">
            <div>
              <span className={`live-dot${speech.listening ? ' is-live' : ''}`} />
              <strong>{t('transcript')}</strong>
              <small>{speech.listening ? t('listening') : t('idle')}</small>
            </div>
            <button className="text-button" type="button" onClick={speech.clear}>{t('clear')}</button>
          </div>

          <div className="privacy-notice">
            <strong>{t('privacyTitle')}</strong>
            <p>{t('privacyText')}</p>
            <label>
              <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
              <span>{t('consent')}</span>
            </label>
          </div>

          <div className="transcript-editor-wrap">
            <textarea
              value={speech.transcript}
              onChange={(event) => speech.setTranscript(event.target.value)}
              placeholder={t('transcriptPlaceholder')}
              aria-label={t('transcript')}
            />
            {speech.interim && <p className="interim-transcript">{speech.interim}</p>}
            <span className="editor-note">{t('freeText')}</span>
          </div>

          {speech.error && <p className="speech-error">{speech.error}</p>}
          {!speech.supported && <p className="speech-error">{t('unsupported')}</p>}

          <div className="listen-controls">
            <button
              className={`listen-button${speech.listening ? ' is-listening' : ''}`}
              type="button"
              onClick={toggleListening}
              disabled={!consent || !speech.supported}
            >
              <span className="listen-icon">{speech.listening ? <StopIcon /> : <MicrophoneIcon />}</span>
              <span>{speech.listening ? t('stop') : t('listen')}</span>
              {speech.listening && <i className="audio-bars" aria-hidden="true"><b /><b /><b /><b /><b /></i>}
            </button>
            <button className="demo-button" type="button" onClick={runDemo}><SparkIcon />{t('demo')}</button>
          </div>
        </section>

        <section className="conversation-panel">
          <div className="panel-head">
            <div><strong>{t('conversationMap')}</strong><small>{detected.length ? `${detected.length} ${t('detectedTopics')}` : t('detectedTopics')}</small></div>
          </div>

          <div className={`live-argument-map${detected.length ? ' has-topics' : ''}`}>
            <div className="utterance-node">
              <span>{t('live')}</span>
              <p>{lastExcerpt || t('noTopics')}</p>
            </div>
            <div className="map-trunk" aria-hidden="true" />
            <div className="detected-topic-stack">
              {detected.length === 0 ? (
                <div className="empty-topic-state"><SparkIcon /><p>{t('noTopics')}</p></div>
              ) : detected.map(({ topic, score, matchedKeywords }, topicIndex) => (
                <article className="detected-topic-card" key={topic.id} style={{ '--topic-index': topicIndex } as React.CSSProperties}>
                  <button type="button" onClick={() => openTopicGraph(topic.nodeIds[0] ?? 'budapest')}>
                    <span className="topic-score">{String(score).padStart(2, '0')}</span>
                    <span>
                      <small>{matchedKeywords.slice(0, 3).join(' · ')}</small>
                      <strong>{local(topic.title, language)}</strong>
                      <em>{local(topic.summary, language)}</em>
                    </span>
                  </button>
                  <div className="topic-source-row">
                    {topic.sourceEventIds.slice(0, 3).map((eventId) => {
                      const event = eventsById.get(eventId)
                      if (!event) return null
                      return <button type="button" key={eventId} onClick={() => navigate(`/event/${eventId}`)}>{local(event.title, language)}</button>
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="response-dock">
        <div className="response-dock-head">
          <strong>{t('responseOptions')}</strong>
          <span>{detected[0] ? local(detected[0].topic.title, language) : 'Evidence-first'}</span>
        </div>
        <div className="response-grid">
          {suggestions.slice(0, 3).map((suggestion, index) => {
            const key = `${suggestion.kind}-${index}`
            return (
              <article className={`response-card kind-${suggestion.kind}`} key={key}>
                <div><span>{suggestionLabel(suggestion.kind, language)}</span><strong>{suggestion.title}</strong></div>
                <p>{suggestion.text}</p>
                <button type="button" onClick={() => copySuggestion(key, suggestion.text)}>
                  <CopyIcon /> {copied === key ? t('copied') : t('copy')}
                </button>
              </article>
            )
          })}
        </div>
      </section>
    </section>
  )
}
