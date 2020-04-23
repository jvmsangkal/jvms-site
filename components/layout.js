import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const Layout = ({ children, home }) => (
  <div className="grid md:grid-cols-2 sm:grid-cols-1">
    {home ? (
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
    ) : (
      ''
    )}
    <div>
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
