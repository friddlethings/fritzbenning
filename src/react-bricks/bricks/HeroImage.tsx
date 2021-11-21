import React, { useState } from 'react'
import { Image, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Lightbox from '../../components/Lightbox'
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
  const [lightbox, setLightbox] = useState(false)

  return (
    <Brick
      className="hero-image"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <div onClick={() => setLightbox(true)}>
            <Image
              propName="image"
              alt="Icon"
              containerClassName="hero-image__inner"
              maxWidth={3000}
            />
          </div>
          {title && <caption className="hero-image__caption">{title}</caption>}
          {lightbox && (
            <Lightbox close={() => setLightbox(false)}>
              <Image
                propName="image"
                alt="Icon"
                containerClassName="hero-image--lightbox"
                maxWidth={3000}
              />
              {title && (
                <caption className="hero-image__caption">{title}</caption>
              )}
            </Lightbox>
          )}
        </Column>
      </Row>
    </Brick>
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
