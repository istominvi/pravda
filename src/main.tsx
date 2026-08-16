import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import '@xyflow/react/dist/style.css'
import './styles.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element was not found')

createRoot(root).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
