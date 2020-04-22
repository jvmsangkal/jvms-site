import { Helmet } from 'react-helmet'
import MainLayout from '../components/mainLayout'

export default function Blog() {
  return (
    <MainLayout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <p>This is the blog page</p>
    </MainLayout>
  )
}
