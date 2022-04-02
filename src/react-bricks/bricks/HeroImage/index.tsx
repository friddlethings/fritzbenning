import classNames from 'classnames'
import React, { useState } from 'react'
import { Image, types, useAdminContext } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Lightbox from '../../../components/Lightbox'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps
} from '../../sideProps/LayoutProps'
import styles from './styles.module.scss'

interface HeroImageProps extends LayoutInterface {
  image: string
  title: string
}

const HeroImage: types.Brick<HeroImageProps> = ({
  title,
  width,
  paddingTop,
  paddingBottom
}) => {
  const { isAdmin } = useAdminContext()

  const [lightbox, setLightbox] = useState(false)

  const handleLighbox = () => {
    !isAdmin && setLightbox(!lightbox)
  }

  return (
    <Unit width={width} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <Row>
        <Column xs={12}>
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
            <Image
              propName="image"
              alt="Icon"
              containerClassName={classNames(styles.image, styles.lightbox)}
              maxWidth={3000}
            />
            {title && (
              <caption className={classNames(styles.caption, styles.inverted)}>
                {title}
              </caption>
            )}
          </Lightbox>
        </Column>
      </Row>
    </Unit>
  )
}

HeroImage.schema = {
  name: 'hero-image',
  label: 'Hero Bild',
  getDefaultProps: () => ({
    title: 'Bildtitle',
    ...LayoutDefaultProps
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Bildunterschrift',
      show: props => true,
      type: types.SideEditPropType.Text
    },
    LayoutProps
  ]
}

export default HeroImage
