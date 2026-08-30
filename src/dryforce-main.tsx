import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/ibm-plex-sans-condensed/500.css'
import '@fontsource/ibm-plex-sans-condensed/600.css'
import '@fontsource/ibm-plex-sans-condensed/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/600.css'
import '@fontsource/source-sans-3/700.css'
import './dryforce.css'
import DryforceApp from './DryforceApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DryforceApp />
  </React.StrictMode>,
)
