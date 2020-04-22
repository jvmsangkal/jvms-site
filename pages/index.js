import { Helmet } from 'react-helmet'
import MainLayout from '../components/mainLayout'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container">
        <div>
          <LazyLoadImage
            alt="John Viscel"
            height="1000"
            width="1000"
            effect="blur"
            placeholderSrc={require('../assets/images/background.jpg?lqip')}
            src={require('../assets/images/background.jpg?resize&size=1500')}
          />
        </div>
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
    </MainLayout>
  )
}
