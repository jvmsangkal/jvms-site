import FacebookIcon from '../assets/icons/facebook-with-circle.svg'
import EmailIcon from '../assets/icons/mail-with-circle.svg'
import GithubIcon from '../assets/icons/github-with-circle.svg'
import LinkedInIcon from '../assets/icons/linkedin-with-circle.svg'
import InstagramIcon from '../assets/icons/instagram-with-circle.svg'
import TwitterIcon from '../assets/icons/twitter-with-circle.svg'

const icons = [
  {
    Component: FacebookIcon,
    href: 'https://www.facebook.com/jvmsangkal',
  },
  {
    Component: EmailIcon,
    href: 'mailto:jvmsangkaL@gmail.com',
  },
  {
    Component: GithubIcon,
    href: 'https://github.com/jvmsangkal',
  },
  {
    Component: LinkedInIcon,
    href: 'https://www.linkedin.com/in/jvmsangkal/',
  },
  {
    Component: InstagramIcon,
    href: 'https://www.instagram.com/jvms105/',
  },
  {
    Component: TwitterIcon,
    href: 'https://twitter.com/jvms_dev',
  },
]

const Footer = () => (
  <footer className="flex">
    {icons.map((icon) => (
      <a
        className="mr-2"
        rel="noopener noreferrer"
        target="_blank"
        href={icon.href}
        key={icon.href}
      >
        <icon.Component className="h-10 w-10 fill-current" />
      </a>
    ))}
  </footer>
)

export default Footer
