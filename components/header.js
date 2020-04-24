import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
]

const Header = () => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <header>
      <nav className="my-8">
        {links.map(({ name, href }) => {
          let linkClass = classNames(
            'mr-2',
            'text-sm',
            'text-blue-600',
            'hover:text-blue-800',
            'font-bold',
            'uppercase',
            'tracking-wide',
            {
              underline: pathname === href,
            }
          )
          return (
            <Link href={href} key={name}>
              <a className={linkClass}>{name}</a>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
