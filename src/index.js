import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'App'

// eslint-disable-next-line no-unused-vars
import Global from 'presentation/styles/global.scss'
// eslint-disable-next-line no-unused-vars
import Fonts  from 'presentation/styles/fonts.scss'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
