import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
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
          <Route path="/articles" element={<ArticlesView />} />
          <Route path="/articles/:articleId" element={<ArticleView />} />
          <Route path="/ai" element={<AIAssistantView />} />
          <Route path="*" element={<Navigate to="/chrono" replace />} />
        </Routes>
      </main>
    </div>
  )
}
