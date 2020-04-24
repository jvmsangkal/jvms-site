import { getAllPostIds, getPostData } from '../../lib/posts'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Date from '../../components/date'
import PropTypes from 'proptypes'

export default function Post({ postData }) {
  return (
    <Layout>
      <Helmet>
        <title>{postData.title}</title>
      </Helmet>
      <article>
        <h1 className="text-2xl font-bold">{postData.title}</h1>
        <div className="text-gray-600 text-sm">
          <Date dateString={postData.date} />
        </div>
        <div
          className="text-gray-700 mt-10"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  )
}

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    contentHtml: PropTypes.string,
  }).isRequired,
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
