import React from 'react'
import { Repeater, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import './TeaserGallery.scss'

interface TeaserGalleryProps {
  teasers: string
}

const TeaserGallery: types.Brick<TeaserGalleryProps> = () => {
  return (
    <Brick className="teaser-gallery" contrained displaced>
      <Repeater
        propName="teasers"
        renderWrapper={(items) => <Row>{items}</Row>}
        renderItemWrapper={(item) => (
          <Column xs={12} m={6}>
            {item}
          </Column>
        )}
      />
    </Brick>
  )
}

TeaserGallery.schema = {
  name: 'teaser-gallery',
  label: 'Teaser Galerie',
  getDefaultProps: () => ({
    teasers: [],
  }),
  repeaterItems: [
    {
      name: 'teasers',
      itemType: 'teaser',
      itemLabel: 'Teaser',
      max: 4,
    },
  ],
}

export default TeaserGallery
