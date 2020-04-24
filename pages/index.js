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

        <p className="text-gray-700 mt-6">
          Hi! I’m John Viscel, I’m a Software Engineer from the Philippines.
        </p>

        <p className="text-gray-700 mt-6">
          In the last 5 years, I worked with startups, such as Importgenius and
          MCN Freedom! Tech, Inc. to build products that solve the right
          problems for their audiences.
        </p>

        <p className="text-gray-700 mt-6">
          I am currently <strong>available for hire.</strong>
        </p>

        <a
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-900 text-white py-2 px-3 rounded-md shadow-md uppercase text-sm font-semibold tracking-wider focus:shadow-outline"
          href="https://github.com/jvmsangkal/Resume/raw/master/resume.pdf"
          download
        >
          Dowload Resume
        </a>

        <a
          className="ml-2 inline-block mt-8 bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-md shadow-md uppercase text-sm font-semibold tracking-wider focus:shadow-outline"
          href="mailto:jvmsangkaL@gmail.com"
          download
        >
          Get in touch
        </a>
      </div>
    </Layout>
  )
}
