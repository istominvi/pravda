import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router'
import { AppHeader } from './components/AppHeader'
import { useAppStore } from './store/useAppStore'
import { AIAssistantView } from './views/AIAssistantView'
import { ChronoView } from './views/ChronoView'
import { ConnectionsView } from './views/ConnectionsView'
import { ArticleView, ArticlesView } from './views/ArticlesView'

function RouteEffects() {
  const location = useLocation()
  useEffect(() => {
    const view = location.pathname.split('/')[1] || 'chrono'
    document.title = view === 'connections'
      ? 'PRAVDA — Связи'
      : view === 'articles'
        ? 'PRAVDA — Статьи'
      : view === 'ai'
        ? 'PRAVDA — AI'
        : view === 'event'
          ? 'PRAVDA — Событие'
          : 'PRAVDA — Хроно'
  }, [location.pathname])
  return null
}

function LegacyEventRedirect() {
  const { eventId } = useParams()
  return <Navigate to={eventId ? `/articles/${eventId}` : '/articles'} replace />
}

function LegacyArgumentRedirect() {
  const { argumentId } = useParams()
  return <Navigate to={argumentId ? `/articles/${argumentId}` : '/articles'} replace />
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
          <Route path="/articles" element={<ArticlesView />} />
          <Route path="/articles/:articleId" element={<ArticleView />} />
          <Route path="/arguments" element={<Navigate to="/articles" replace />} />
          <Route path="/argument/:argumentId" element={<LegacyArgumentRedirect />} />
          <Route path="/ai" element={<AIAssistantView />} />
          <Route path="/event/:eventId" element={<LegacyEventRedirect />} />
          <Route path="*" element={<Navigate to="/chrono" replace />} />
        </Routes>
      </main>
    </div>
  )
}
