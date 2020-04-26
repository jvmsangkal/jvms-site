import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'proptypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const works = [
  {
    link: 'https://www.importgenius.com/',
    title: 'Importgenius Website',
    lqImageSrc: require('../assets/images/ig-site.png?lqip'),
    imageSrc: require('../assets/images/ig-site.png?resize&size=800'),
    shortDesc:
      'Comprehensive trade databases from ImportGenius support import-export business in finding new global opportunities, research markets, evaluate trade partners, and more.',
  },
  {
    link: 'https://next.importgenius.com/',
    title: 'Importgenius App Next-Gen',
    lqImageSrc: require('../assets/images/isng.png?lqip'),
    imageSrc: require('../assets/images/isng.png?resize&size=800'),
    shortDesc: 'Beta release of the new ImportGenius App',
  },
  {
    link: 'https://www.tunes.tm/#/',
    title: 'Tunes.tm',
    lqImageSrc: require('../assets/images/tunes.png?lqip'),
    imageSrc: require('../assets/images/tunes.png?resize&size=800'),
    shortDesc:
      'Tunes is a Music Discovery Service that allows Music Artists or Music Providers to import their music into Tunes for others to discover.',
  },
]

function WorkCard({ link, title, lqImageSrc, imageSrc, shortDesc }) {
  return (
    <div className="mt-4 mb-8">
      <a
        className="hover:text-blue-700 hover:underline hover:opacity-75"
        href={link}
      >
        <LazyLoadImage
          wrapperClassName="w-full max-w-4xl rounded-md shadow-lg object-cover object-center"
          className="w-full max-w-4xl rounded-md shadow-lg object-cover object-center"
          alt={title}
          effect="blur"
          placeholderSrc={lqImageSrc}
          src={imageSrc}
        />
        <h2 className="text-lg font-bold tracking-wide mt-6">{title}</h2>
      </a>
      <p className="text-gray-600 mb-4">{shortDesc}</p>
      <hr />
    </div>
  )
}

WorkCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  lqImageSrc: PropTypes.object,
  imageSrc: PropTypes.string,
  shortDesc: PropTypes.string,
}

export default function Work() {
  return (
    <Layout>
      <Helmet>
        <title>Work</title>
      </Helmet>
      {works.map((work) => (
        <WorkCard {...work} key={work.title} />
      ))}
    </Layout>
  )
}
