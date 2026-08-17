import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@xyflow/react/dist/style.css'
import './styles.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element was not found')
const browserBase = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={browserBase}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
