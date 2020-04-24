import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const Layout = ({ children, home }) => (
  <div className="min-h-screen flex flex-wrap justify-center">
    {home ? (
      <div className="lg:w-1/2 sm:w-full">
        <LazyLoadImage
          wrapperClassName="block md:h-full w-full sm:h-64"
          className="md:h-full w-full sm:h-64 object-cover object-center"
          alt="John Viscel"
          effect="blur"
          placeholderSrc={require('../assets/images/background.jpg?lqip')}
          src={require('../assets/images/background.jpg?resize&size=1500')}
        />
      </div>
    ) : (
      ''
    )}
    <div className="p-6 md:px-16 md:py-8 lg:w-1/2 w-full flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
}

export default Layout
