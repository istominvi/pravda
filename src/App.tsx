import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { AppHeader } from './components/AppHeader'
import { useAppStore } from './store/useAppStore'
import { AIAssistantView } from './views/AIAssistantView'
import { ChronoView } from './views/ChronoView'
import { ConnectionsView } from './views/ConnectionsView'
import { EventView } from './views/EventView'
import { ArgumentView, ArgumentsView } from './views/ArgumentsView'

function RouteEffects() {
  const location = useLocation()
  useEffect(() => {
    const view = location.pathname.split('/')[1] || 'chrono'
    document.title = view === 'connections'
      ? 'PRAVDA — Связи'
      : view === 'arguments' || view === 'argument'
        ? 'PRAVDA — Аргументы'
      : view === 'ai'
        ? 'PRAVDA — AI'
        : view === 'event'
          ? 'PRAVDA — Событие'
          : 'PRAVDA — Хроно'
  }, [location.pathname])
  return null
}

export default function App() {
  const language = useAppStore((state) => state.language)
  const theme = useAppStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.theme = theme
  }, [language, theme])

  return (
    <div className="app-shell">
      <RouteEffects />
      <AppHeader />
      <main className="app-main">
        <Routes>
          <Route path="/chrono" element={<ChronoView />} />
          <Route path="/connections" element={<ConnectionsView />} />
          <Route path="/arguments" element={<ArgumentsView />} />
          <Route path="/argument/:argumentId" element={<ArgumentView />} />
          <Route path="/ai" element={<AIAssistantView />} />
          <Route path="/event/:eventId" element={<EventView />} />
          <Route path="*" element={<Navigate to="/chrono" replace />} />
        </Routes>
      </main>
    </div>
  )
}
