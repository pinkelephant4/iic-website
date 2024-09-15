import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MouseAnimation from "./components/MouseAnimation.jsx";
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseAnimation/>
    <App />
  </StrictMode>,
)
