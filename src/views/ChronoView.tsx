import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { events } from '../data/events'
import { articlePath } from '../data/articles'
import { useAppStore } from '../store/useAppStore'
import { languageLocale, local, translate } from '../utils/i18n'

const MIN_DATE = new Date('1944-01-01T00:00:00Z').getTime()
const MAX_DATE = new Date('2027-01-01T00:00:00Z').getTime()
const RANGE_MS = MAX_DATE - MIN_DATE
const BASE_PX_PER_YEAR = 126
const BASE_WORLD_WIDTH = 83 * BASE_PX_PER_YEAR
const MIN_ZOOM = 0.45
const MAX_ZOOM = 4.8

function dateMs(value: string): number {
  return new Date(value).getTime()
}

function baseXForDate(value: string): number {
  return ((dateMs(value) - MIN_DATE) / RANGE_MS) * BASE_WORLD_WIDTH
}

function tickStep(zoom: number): number {
  const pxYear = BASE_PX_PER_YEAR * zoom
  if (pxYear < 30) return 10
  if (pxYear < 62) return 5
  if (pxYear < 118) return 2
  return 1
}

export function ChronoView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const panRef = useRef(0)
  const zoomRef = useRef(1)
  const inertiaRef = useRef<number | null>(null)
  const initialisedRef = useRef(false)
  const [panX, setPanX] = useState(0)
  const [zoom, setZoomState] = useState(1)
  const [viewportWidth, setViewportWidth] = useState(() => typeof window === 'undefined' ? 1280 : window.innerWidth)
  const [dragging, setDragging] = useState(false)
  const [interacted, setInteracted] = useState(false)

  const t = useCallback((key: Parameters<typeof translate>[1]) => translate(language, key), [language])
  const worldWidth = BASE_WORLD_WIDTH * zoom

  const clampPan = useCallback((value: number, zoomValue = zoomRef.current, soft = false): number => {
    const viewport = stageRef.current?.clientWidth ?? viewportWidth
    const width = BASE_WORLD_WIDTH * zoomValue
    const overscroll = soft ? viewport * 0.24 : Math.min(60, viewport * 0.06)
    const min = Math.min(viewport - width - overscroll, -overscroll)
    const max = overscroll
    return Math.max(min, Math.min(max, value))
  }, [viewportWidth])

  const commitPan = useCallback((value: number, soft = false) => {
    const next = clampPan(value, zoomRef.current, soft)
    panRef.current = next
    setPanX(next)
  }, [clampPan])

  const setZoom = useCallback((nextZoom: number, anchorClientX?: number) => {
    const stage = stageRef.current
    if (!stage) return
    const oldZoom = zoomRef.current
    const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextZoom))
    if (Math.abs(next - oldZoom) < 0.0001) return

    const rect = stage.getBoundingClientRect()
    const anchor = (anchorClientX ?? rect.left + rect.width / 2) - rect.left
    const anchorBase = (anchor - panRef.current) / oldZoom
    const nextPan = anchor - anchorBase * next

    zoomRef.current = next
    setZoomState(next)
    panRef.current = clampPan(nextPan, next, true)
    setPanX(panRef.current)
    setInteracted(true)
  }, [clampPan])

  const centerOnDate = useCallback((value: string, zoomValue = zoomRef.current) => {
    const viewport = stageRef.current?.clientWidth ?? viewportWidth
    const x = baseXForDate(value) * zoomValue
    commitPan(viewport / 2 - x)
  }, [commitPan, viewportWidth])

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return
      setViewportWidth(entry.contentRect.width)
      if (initialisedRef.current) commitPan(panRef.current)
    })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [commitPan])

  useLayoutEffect(() => {
    if (initialisedRef.current || !stageRef.current) return
    initialisedRef.current = true
    centerOnDate('2014-03-01')
  }, [centerOnDate])

  useEffect(() => () => {
    if (inertiaRef.current) cancelAnimationFrame(inertiaRef.current)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      setInteracted(true)
      if (event.metaKey || event.ctrlKey) {
        const factor = Math.exp(-event.deltaY * 0.0022)
        setZoom(zoomRef.current * factor, event.clientX)
      } else {
        const movement = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
        commitPan(panRef.current - movement, true)
      }
    }

    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [commitPan, setZoom])

  const dragState = useRef({
    pointerId: -1,
    startX: 0,
    startPan: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  })

  const stopInertia = () => {
    if (inertiaRef.current) cancelAnimationFrame(inertiaRef.current)
    inertiaRef.current = null
  }

  const startInertia = useCallback((initialVelocity: number) => {
    stopInertia()
    let velocity = initialVelocity
    let last = performance.now()
    const step = (now: number) => {
      const dt = Math.min(32, now - last)
      last = now
      commitPan(panRef.current + velocity * dt, true)
      velocity *= Math.pow(0.92, dt / 16.67)
      if (Math.abs(velocity) > 0.012) inertiaRef.current = requestAnimationFrame(step)
      else {
        commitPan(panRef.current)
        inertiaRef.current = null
      }
    }
    inertiaRef.current = requestAnimationFrame(step)
  }, [commitPan])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest('[data-event-card]')) return
    stopInertia()
    setDragging(true)
    setInteracted(true)
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startPan: panRef.current,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || dragState.current.pointerId !== event.pointerId) return
    const now = performance.now()
    const dt = Math.max(1, now - dragState.current.lastTime)
    const dx = event.clientX - dragState.current.lastX
    dragState.current.velocity = dx / dt
    dragState.current.lastX = event.clientX
    dragState.current.lastTime = now
    commitPan(dragState.current.startPan + event.clientX - dragState.current.startX, true)
  }

  const finishPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || dragState.current.pointerId !== event.pointerId) return
    setDragging(false)
    try { event.currentTarget.releasePointerCapture(event.pointerId) } catch { /* pointer may already be released */ }
    startInertia(dragState.current.velocity)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); commitPan(panRef.current + 110) }
    if (event.key === 'ArrowRight') { event.preventDefault(); commitPan(panRef.current - 110) }
    if (event.key === '+' || event.key === '=') { event.preventDefault(); setZoom(zoomRef.current * 1.18) }
    if (event.key === '-') { event.preventDefault(); setZoom(zoomRef.current / 1.18) }
    if (event.key === '0') {
      event.preventDefault()
      zoomRef.current = 1
      setZoomState(1)
      requestAnimationFrame(() => centerOnDate('2014-03-01', 1))
    }
  }

  const ticks = useMemo(() => {
    const step = tickStep(zoom)
    const minorEvery = step >= 10 ? 5 : 1
    const output: Array<{ year: number; x: number; major: boolean }> = []
    for (let year = 1945; year <= 2026; year += minorEvery) {
      output.push({ year, x: baseXForDate(`${year}-01-01`) * zoom, major: year % step === 0 })
    }
    return output
  }, [zoom])

  const lanes = useMemo(() => {
    const cardWidth = viewportWidth <= 540 ? 154 : viewportWidth <= 820 ? 172 : 196
    const gap = 18
    const laneEnds: number[] = []
    const result = new Map<string, number>()
    ;[...events].sort((a, b) => dateMs(a.date) - dateMs(b.date)).forEach((event) => {
      const x = baseXForDate(event.date) * zoom
      let lane = laneEnds.findIndex((end) => x - end >= cardWidth + gap)
      if (lane === -1) {
        lane = laneEnds.length
        laneEnds.push(x)
      } else {
        laneEnds[lane] = x
      }
      result.set(event.id, lane)
    })
    return result
  }, [viewportWidth, zoom])

  const visibleRange = useMemo(() => {
    const leftBase = -panX / zoom
    const rightBase = (viewportWidth - panX) / zoom
    const leftMs = MIN_DATE + (leftBase / BASE_WORLD_WIDTH) * RANGE_MS
    const rightMs = MIN_DATE + (rightBase / BASE_WORLD_WIDTH) * RANGE_MS
    const leftYear = Math.max(1944, Math.min(2027, new Date(leftMs).getUTCFullYear()))
    const rightYear = Math.max(1944, Math.min(2027, new Date(rightMs).getUTCFullYear()))
    return `${leftYear}—${rightYear}`
  }, [panX, viewportWidth, zoom])

  const formatDate = (value: string) => new Intl.DateTimeFormat(languageLocale(language), {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(value))

  return (
    <section className="chrono-view" aria-label={t('chrono')}>
      <div
        ref={stageRef}
        className={`chrono-stage${dragging ? ' is-dragging' : ''}`}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        onKeyDown={onKeyDown}
      >
        <div className="chrono-world" style={{ width: worldWidth, transform: `translate3d(${panX}px,0,0)` }}>
          <div className="chrono-axis" style={{ width: worldWidth }} />
          <div className="ticks-layer" aria-hidden="true">
            {ticks.map((tick) => (
              <span key={tick.year}>
                <span className={`chrono-tick${tick.major ? ' is-major' : ''}`} style={{ left: tick.x }} />
                {tick.major && <span className="chrono-tick-label" style={{ left: tick.x }}>{tick.year}</span>}
              </span>
            ))}
          </div>
          <div className="chrono-events">
            {events.map((event) => {
              const x = baseXForDate(event.date) * zoom
              const lane = lanes.get(event.id) ?? 0
              return (
                <div className="chrono-event" key={event.id} style={{ left: x, '--lane': lane } as React.CSSProperties}>
                  <span className="chrono-marker" aria-hidden="true" />
                  <span className="chrono-stem" aria-hidden="true" />
                  <button
                    type="button"
                    className="chrono-card"
                    data-event-card
                    onClick={() => navigate(articlePath(event.id))}
                    aria-label={`${t('openArticle')}: ${local(event.title, language)}`}
                  >
                    <span className="chrono-card-date">{formatDate(event.date)}</span>
                    <span className="chrono-card-title">{local(event.title, language)}</span>
                    <span className="chrono-card-summary">{local(event.short, language)}</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`chrono-hint${interacted ? ' is-hidden' : ''}`} aria-hidden="true">
          <span>{t('dragHint')}</span>
          <span className="hint-divider" />
          <span>{t('zoomHint')}</span>
        </div>

        <div className="chrono-readout" aria-live="polite">
          <span>{visibleRange}</span>
        </div>

        <div className="chrono-zoom-controls" aria-label="Zoom controls">
          <button type="button" onClick={() => setZoom(zoomRef.current / 1.18)} aria-label="Zoom out">−</button>
          <button type="button" onClick={() => { zoomRef.current = 1; setZoomState(1); requestAnimationFrame(() => centerOnDate('2014-03-01', 1)) }} aria-label="Reset zoom">{Math.round(zoom * 100)}%</button>
          <button type="button" onClick={() => setZoom(zoomRef.current * 1.18)} aria-label="Zoom in">+</button>
        </div>
      </div>
    </section>
  )
}
