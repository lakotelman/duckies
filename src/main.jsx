import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {DuckieContextProvider} from "./contexts/duckie-context"

ReactDOM.createRoot(document.getElementById('root')).render(
  <DuckieContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DuckieContextProvider>
)
