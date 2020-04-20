import CommonHead from './CommonHead'
import Header from './Header'
import PropTypes from 'prop-types'

// How to implement layouts with Higher Order Components:
// https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

const MainLayout = (props) => (
  <div>
    <CommonHead />
    <Header />
    {props.children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
