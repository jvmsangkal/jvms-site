import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1 className="title">Welcome to my website</h1>

        <p className="description">Work in progress. Coming soon.</p>

        <a
          href="https://github.com/jvmsangkal/Resume/raw/master/resume.pdf"
          download
        >
          Dowload Resume
        </a>

        <a href="mailto:jvmsangkaL@gmail.com">Email me</a>
      </div>
    </Layout>
  )
}
