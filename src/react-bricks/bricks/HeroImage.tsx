import React from 'react'
import { Image, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import './HeroImage.scss'

interface HeroImageProps {
  image: string
  title: string
}

const HeroImage: types.Brick<HeroImageProps> = ({ title }) => {
  console.log(title)
  return (
    <Brick className="hero-image" displaced>
      <Row>
        <Column xs={12}>
          <Image
            propName="image"
            alt="Icon"
            imageClassName="hero-image__inner"
            maxWidth={2024}
            aspectRatio={1.33}
          />
          {title && <caption className="hero-image__caption">{title}</caption>}
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
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Bildunterschrift',
      show: (props) => true,
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeroImage
