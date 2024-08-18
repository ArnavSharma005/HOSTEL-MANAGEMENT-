import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PopupProvider } from './context api/toggle.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopupProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PopupProvider>
  </StrictMode>,
)
