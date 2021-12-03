import React, { useState } from 'react'
import { Image, types, useAdminContext } from 'react-bricks'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Lightbox from '../../components/Lightbox'
import Unit from '../../components/Unit'
import './HeroImage.scss'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from './sideProps/LayoutProps'

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
  const { isAdmin, previewMode } = useAdminContext()

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
              containerClassName="hero-image__floating"
              maxWidth={3000}
            />
          </div>
          {title && <caption className="hero-image__caption">{title}</caption>}
          <Lightbox show={lightbox} close={handleLighbox}>
            <Image
              propName="image"
              alt="Icon"
              containerClassName="hero-image__lightbox"
              maxWidth={3000}
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
