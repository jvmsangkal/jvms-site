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
        <p>
          I am currently <strong>available for hire.</strong>
        </p>
        <a
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-900 text-white py-2 px-2 rounded-md shadow-lg uppercase text-sm font-semibold tracking-wider focus:shadow-outline"
          href="https://github.com/jvmsangkal/Resume/raw/master/resume.pdf"
          download
        >
          Dowload Resume
        </a>
      </div>
    </Layout>
  )
}
