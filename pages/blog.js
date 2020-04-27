import { Helmet } from 'react-helmet'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import PropTypes from 'proptypes'
import Date from '../components/date'
import ProgressiveImage from 'react-progressive-image'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="flex items-center justify-start flex-wrap">
        <ProgressiveImage
          className="rounded-full h-16 w-16 object-cover object-center"
          placeholder={require('../assets/images/profile.jpeg?lqip')}
          src={require('../assets/images/profile.jpeg?webp')}
        >
          {(src) => (
            <picture>
              <source
                srcSet={require('../assets/images/profile.jpeg?resize&size=500')}
              />
              <img
                className="rounded-full h-16 w-16 object-cover object-center"
                src={src}
                alt="John Viscel"
              />
            </picture>
          )}
        </ProgressiveImage>
        <h1 className="font-semibold ml-4 text-lg text-gray-800 w-2/3">
          Personal blog by{' '}
          <span className="text-blue-700">John Viscel Sangkal</span>
        </h1>
      </div>
      <section className="text-2xl py-2 mt-2">
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
