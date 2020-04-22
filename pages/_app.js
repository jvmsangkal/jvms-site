import Router from 'next/router'
import { Helmet } from 'react-helmet'

import * as gtag from '../lib/gtag'

// global CSS import
import '../styles/index.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate="%s | John Viscel Sangkal"
        defaultTitle="John Viscel Sangkal"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          { property: 'og:title', content: 'John Viscel Sangkal' },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
          {
            name: 'description',
            content: "John Viscel Sangkal's personal site",
          },
        ]}
        link={[
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
          {
            rel: 'preconnect',
            href: 'https://www.google-analytics.com',
          },
        ]}
      >
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}</script>
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
