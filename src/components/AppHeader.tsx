import { NavLink, useNavigate } from 'react-router'
import type { Language } from '../domain/types'
import { useAppStore } from '../store/useAppStore'
import { translate } from '../utils/i18n'
import { MoonIcon, SunIcon } from './Icons'

export function AppHeader() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const theme = useAppStore((state) => state.theme)
  const setLanguage = useAppStore((state) => state.setLanguage)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const tabClass = ({ isActive }: { isActive: boolean }) => `app-tab${isActive ? ' is-active' : ''}`

  return (
    <header className="app-header">
      <button className="brand-button" type="button" onClick={() => navigate('/chrono')} aria-label="BAZA — home">
        BAZA
      </button>

      <nav className="app-tabs" aria-label="Views">
        <NavLink to="/chrono" className={tabClass}>{t('chrono')}</NavLink>
        <NavLink to="/connections" className={tabClass}>{t('connections')}</NavLink>
        <NavLink to="/ai" className={tabClass}>
          <span>{t('ai')}</span>
          <span className="pro-label">{t('pro')}</span>
        </NavLink>
      </nav>

      <div className="header-controls">
        <label className="language-control">
          <span className="sr-only">{t('language')}</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
            aria-label={t('language')}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uk">UA</option>
          </select>
        </label>
        <button className="icon-button" type="button" onClick={toggleTheme} aria-label={t('theme')}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}
