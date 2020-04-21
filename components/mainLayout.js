import Header from './header'
import Footer from './footer'
import PropTypes from 'prop-types'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const MainLayout = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
