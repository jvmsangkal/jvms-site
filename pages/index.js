import CustomHead from '../components/customHead'
import MainLayout from '../components/mainLayout'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Home() {
  return (
    <MainLayout>
      <CustomHead pageName="Home" />
      <div className="container">
        <div>
          <LazyLoadImage
            alt="JV's picture"
            height="1000"
            width="1000"
            effect="blur"
            placeholderSrc={require('../public/images/background.jpg?lqip')}
            src={require('../public/images/background.jpg?webp')}
          />
        </div>
        <h1 className="title">Welcome to my website</h1>

        <p className="description">Work in progress. Coming soon.</p>
      </div>
    </MainLayout>
  )
}
