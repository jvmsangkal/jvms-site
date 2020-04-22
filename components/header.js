import Link from 'next/link'

const Header = () => (
  <header>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  </header>
)

export default Header
