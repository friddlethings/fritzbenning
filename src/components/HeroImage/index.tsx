import classNames from 'classnames'
import React, { useState } from 'react'
import { Image, useAdminContext } from 'react-bricks/frontend'
import Lightbox from '../Lightbox'
import styles from './styles.module.scss'

interface HeroImageProps {
  title: string
  image: JSX.Element
}

const HeroImage: React.FC<HeroImageProps> = ({ title, image }) => {
  const { isAdmin } = useAdminContext()

  const [lightbox, setLightbox] = useState(false)

  const handleLighbox = () => {
    !isAdmin && setLightbox(!lightbox)
  }

  return (
    <>
      <div className={styles.image} onClick={handleLighbox}>
        <Image
          propName="image"
          alt="Icon"
          containerClassName={styles.container}
          aspectRatio={3 / 2}
          maxWidth={3000}
        />
      </div>
      {title && <caption className={styles.caption}>{title}</caption>}
      <Lightbox show={lightbox} close={handleLighbox}>
        <div className={classNames(styles.image, styles.lightbox)}>{image}</div>
        {title && (
          <caption className={classNames(styles.caption, styles.inverted)}>
            {title}
          </caption>
        )}
      </Lightbox>
    </>
  )
}

export default HeroImage
