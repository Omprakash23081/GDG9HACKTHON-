import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import style from "./main.module.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={style.app_contener}>
      <App />
    </div>
  </StrictMode>,
)
