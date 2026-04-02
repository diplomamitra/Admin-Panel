import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import AppRouter from './routes/AppRouter'

createRoot(document.getElementById('root')).render(
 <AppRouter/>
)
