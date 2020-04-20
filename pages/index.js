import CustomHead from '../components/customHead'
import MainLayout from '../components/mainLayout'

export default function Home() {
  return (
    <MainLayout>
      <CustomHead />
      <div className="container">
        <main>
          <h1 className="title">Welcome to my website</h1>

          <p className="description">Work in progress. Coming soon.</p>
        </main>

        <footer></footer>
      </div>
    </MainLayout>
  )
}
