import Head from 'next/head'

// consider using react-helmet: https://github.com/zeit/next.js/tree/canary/examples/with-react-helmet
export default function CommonHead() {
  return (
    <Head>
      <title>John Viscel Sangkal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="description" content="John Viscel Sangkal's personal site" />
    </Head>
  )
}
