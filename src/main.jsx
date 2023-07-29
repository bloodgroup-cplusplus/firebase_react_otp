import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Login.jsx'
import './index.css'
import {AuthContextProvider} from "./context/authContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider><App/></AuthContextProvider>
  </React.StrictMode>,
)
