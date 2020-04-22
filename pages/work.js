import { Helmet } from 'react-helmet'
import MainLayout from '../components/mainLayout'

export default function About() {
  return (
    <MainLayout>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <p>This is the work page</p>
    </MainLayout>
  )
}
