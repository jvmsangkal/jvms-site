// import FacebookIcon from '../assets/icons/facebook-with-circle.svg'
import EmailIcon from '../assets/icons/mail-with-circle.svg'
import GithubIcon from '../assets/icons/github-with-circle.svg'
import LinkedInIcon from '../assets/icons/linkedin-with-circle.svg'
// import InstagramIcon from '../assets/icons/instagram-with-circle.svg'
// import TwitterIcon from '../assets/icons/twitter-with-circle.svg'

const icons = [
  // {
  //   Component: FacebookIcon,
  //   href: 'https://www.facebook.com/jvmsangkal',
  // },
  {
    Component: EmailIcon,
    href: 'mailto:jvmsangkaL@gmail.com',
  },
  {
    Component: LinkedInIcon,
    href: 'https://www.linkedin.com/in/jvmsangkal/',
  },
  {
    Component: GithubIcon,
    href: 'https://github.com/jvmsangkal',
  },
]

const Footer = () => (
  <footer className="flex mt-10 items-center">
    <span className="text-sm text-gray-600">Socials |</span>
    {icons.map((icon) => (
      <a
        className="ml-2"
        rel="noopener noreferrer"
        target="_blank"
        href={icon.href}
        key={icon.href}
      >
        <icon.Component className="h-10 w-10 fill-current text-blue-500 hover:text-blue-800" />
      </a>
    ))}
  </footer>
)

export default Footer
