import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1 className="text-5xl font-bold uppercase tracking-wider">
          John <span className="text-blue-700">Viscel</span>
        </h1>

        <p></p>
        <p>I am currently <strong>available for hire.</strong></p>

        <a
          href="https://github.com/jvmsangkal/Resume/raw/master/resume.pdf"
          download
        >
          Dowload Resume
        </a>
      </div>
    </Layout>
  )
}
