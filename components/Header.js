import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
  </div>
)

export default Header
