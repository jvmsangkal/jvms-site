import { Helmet } from 'react-helmet'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import PropTypes from 'proptypes'
import Date from '../components/date'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="flex items-center">
        <LazyLoadImage
          wrapperClassName="rounded-full h-16 w-16 object-cover object-center"
          className="rounded-full h-16 w-16 object-cover object-center"
          alt="John Viscel"
          effect="blur"
          placeholderSrc={require('../assets/images/profile.jpeg?lqip')}
          src={require('../assets/images/profile.jpeg?webp')}
        />
        <h1 className="font-semibold ml-4 text-lg text-gray-800">
          Personal blog by{' '}
          <span className="text-blue-700">John Viscel Sangkal</span>
        </h1>
      </div>
      <section className="text-2xl p-1 mt-2">
        <ul className="list-none list-outside">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-4" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="font-bold block leading-none">{title}</a>
              </Link>
              <small className="text-gray-600 text-sm">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  allPostsData: PropTypes.array,
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
