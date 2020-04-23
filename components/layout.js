import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const Layout = ({ children, home }) => (
  <div className="min-h-screen grid lg:grid-cols-2 sm:grid-cols-1">
    {home ? (
      <div>
        <LazyLoadImage
          wrapperClassName="h-full w-full block"
          className="h-full w-full object-cover object-center"
          alt="John Viscel"
          effect="blur"
          placeholderSrc={require('../assets/images/background.jpg?lqip')}
          src={require('../assets/images/background.jpg?resize&size=1500')}
        />
      </div>
    ) : (
      ''
    )}
    <div className="px-16 py-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
}

export default Layout
