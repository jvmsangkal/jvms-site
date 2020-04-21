import Head from 'next/head'
import Proptypes from 'prop-types'

// consider using react-helmet: https://github.com/zeit/next.js/tree/canary/examples/with-react-helmet
export default function CustomHead({ pageName }) {
  return (
    <Head>
      <title>{pageName} | John Viscel Sangkal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="description" content="John Viscel Sangkal's personal site" />
    </Head>
  )
}

CustomHead.propTypes = {
  pageName: Proptypes.string.isRequired,
}
