import CustomHead from '../components/customHead'
import MainLayout from '../components/mainLayout'

export default function Blog() {
  return (
    <MainLayout>
      <CustomHead pageName="Blog" />
      <p>This is the blog page</p>
    </MainLayout>
  )
}
