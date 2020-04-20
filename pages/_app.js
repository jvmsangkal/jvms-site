import App from 'next/app'
import Router from 'next/router'

import * as gtag from '../lib/gtag'

// global CSS import
import '../styles/index.css'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default App
