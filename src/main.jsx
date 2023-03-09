import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AuthContextProvider } from './context/AuthContext'
import App from './App'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContextProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  // </AuthContextProvider>
)
