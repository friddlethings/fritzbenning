import React, { useState } from 'react'
import { Image, types, useAdminContext } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import HeroImage from '../../../components/HeroImage'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps
} from '../../sideProps/LayoutProps'

interface HeroImageProps extends LayoutInterface {
  image: string
  title: string
}

const HeroImageBrick: types.Brick<HeroImageProps> = ({
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
          <HeroImage
            title={title}
            image={<Image propName="image" alt="Icon" maxWidth={3000} />}
          />
        </Column>
      </Row>
    </Unit>
  )
}

HeroImageBrick.schema = {
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

export default HeroImageBrick
