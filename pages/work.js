import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'proptypes'
import ProgressiveImage from 'react-progressive-graceful-image'
import classNames from 'classnames'

const works = [
  {
    link: 'https://www.importgenius.com/',
    title: 'Importgenius Website',
    lqImageSrc: require('../assets/images/ig-site.png?lqip'),
    imageSrc: require('../assets/images/ig-site.png?resize&size=1000'),
    webpSrc: require('../assets/images/ig-site.png?webp'),
    shortDesc:
      'Comprehensive trade databases from ImportGenius support import-export business in finding new global opportunities, research markets, evaluate trade partners, and more.',
  },
  {
    link: 'https://next.importgenius.com/',
    title: 'Importgenius App Next-Gen',
    lqImageSrc: require('../assets/images/isng.png?lqip'),
    imageSrc: require('../assets/images/isng.png?resize&size=1000'),
    webpSrc: require('../assets/images/isng.png?webp'),
    shortDesc: 'Beta release of the new ImportGenius App',
  },
  {
    link: 'https://www.tunes.tm/#/',
    title: 'Tunes.tm',
    lqImageSrc: require('../assets/images/tunes.png?lqip'),
    imageSrc: require('../assets/images/tunes.png?resize&size=1000'),
    webpSrc: require('../assets/images/tunes.png?webp'),
    shortDesc:
      'Tunes is a Music Discovery Service that allows Music Artists or Music Providers to import their music into Tunes for others to discover.',
  },
]

function WorkCard({ link, title, lqImageSrc, imageSrc, webpSrc, shortDesc }) {
  return (
    <div className="mt-4 mb-8">
      <a className="hover:text-blue-700 hover:underline" href={link}>
        <ProgressiveImage placeholder={lqImageSrc} src={imageSrc}>
          {(src, loading) => {
            const imgBgClass = classNames('progressive-image-background', {
              'progressive-image-loaded': !loading,
            })

            return (
              <picture className={imgBgClass}>
                <source srcSet={webpSrc} type="image/webp" />
                <source srcSet={src} type="image/png" />
                <img
                  className="w-full max-w-4xl rounded-md shadow-lg object-cover object-center"
                  src={src}
                  alt={title}
                />
              </picture>
            )
          }}
        </ProgressiveImage>
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
  webpSrc: PropTypes.string,
  imageSrc: PropTypes.object,
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
