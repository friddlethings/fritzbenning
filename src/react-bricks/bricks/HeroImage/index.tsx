import React, { useState } from 'react'
import { Image, types, useAdminContext } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Lightbox from '../../../components/Lightbox'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from '../../sideProps/LayoutProps'
import './styles.scss'

interface HeroImageProps extends LayoutInterface {
  image: string
  title: string
}

const HeroImage: types.Brick<HeroImageProps> = ({
  title,
  width,
  paddingTop,
  paddingBottom,
}) => {
  const { isAdmin } = useAdminContext()

  const [lightbox, setLightbox] = useState(false)

  const handleLighbox = () => {
    !isAdmin && setLightbox(!lightbox)
  }

  return (
    <Unit
      className="hero-image"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <div onClick={handleLighbox}>
            <Image
              propName="image"
              alt="Icon"
              containerClassName="hero-image__img"
              maxWidth={3000}
            />
          </div>
          {title && <caption className="hero-image__caption">{title}</caption>}
          <Lightbox show={lightbox} close={handleLighbox}>
            <Image
              propName="image"
              alt="Icon"
              containerClassName="hero-image__img hero-image__img--lightbox"
            />
            {title && (
              <caption className="hero-image__caption is-inverted">
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
    image: 'Seitentitel',
    title: 'Bildtitle',
    ...LayoutDefaultProps,
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Bildunterschrift',
      show: (props) => true,
      type: types.SideEditPropType.Text,
    },
    LayoutProps,
  ],
}

export default HeroImage
