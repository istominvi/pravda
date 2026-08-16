import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Language, Theme } from '../domain/types'

interface AppState {
  language: Language
  theme: Theme
  mapFocusId: string
  mapDepth: 1 | 2
  setLanguage: (language: Language) => void
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  setMapFocusId: (id: string) => void
  setMapDepth: (depth: 1 | 2) => void
}

function preferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'ru',
      theme: preferredTheme(),
      mapFocusId: 'budapest',
      mapDepth: 1,
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setMapFocusId: (mapFocusId) => set({ mapFocusId }),
      setMapDepth: (mapDepth) => set({ mapDepth }),
    }),
    {
      name: 'baza-app',
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
        mapFocusId: state.mapFocusId,
        mapDepth: state.mapDepth,
      }),
    },
  ),
)
