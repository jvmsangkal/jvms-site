import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { LazyLoadImage } from 'react-lazy-load-image-component'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const Layout = ({ children, home }) => {
  const contentDivClass = classNames(
    'p-6',
    'md:px-16',
    'md:py-8',
    'w-full',
    'flex',
    'flex-col',
    { 'lg:w-1/2': home, 'lg:w-2/3': !home }
  )

  return (
    <div className="min-h-screen flex flex-wrap justify-center">
      {home && (
        <div className="lg:w-1/2 sm:w-full">
          <LazyLoadImage
            wrapperClassName="block lg:h-full w-full h-64"
            className="lg:h-full w-full h-64 object-cover object-center"
            alt="John Viscel"
            effect="blur"
            placeholderSrc={require('../assets/images/background.jpg?lqip')}
            src={require('../assets/images/background.jpg?resize&size=1500')}
          />
        </div>
      )}
      <div className={contentDivClass}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
}

export default Layout
