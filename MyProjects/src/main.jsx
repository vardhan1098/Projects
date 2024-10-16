import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Products from './components/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
  </StrictMode>,
)
