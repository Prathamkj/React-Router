import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    // Yaha pe humne app ko browsser-router me wrap kardiya bhaiyooo aur bahenoo
    <BrowserRouter>
        <App />
    </BrowserRouter>
  
)
