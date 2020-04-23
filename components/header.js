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
      <div>
        {links.map(({ name, href }) => {
          let linkClass = classNames(
            'mx-2',
            'text-blue-500',
            'hover:text-blue-800',
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
      </div>
    </header>
  )
}

export default Header
