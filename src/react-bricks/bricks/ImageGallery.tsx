import React, { useState } from 'react'
import { Repeater, types, useAdminContext } from 'react-bricks'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Lightbox from '../../components/Lightbox'
import Unit from '../../components/Unit'
import './ImageGallery.scss'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from './sideProps/LayoutProps'

interface ImageGalleryProps extends LayoutInterface {
  images: string[]
}

const ImageGallery: types.Brick<ImageGalleryProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  const [lightbox, setLightbox] = useState(false)

  const { isAdmin, previewMode } = useAdminContext()

  const handleLighbox = () => {
    !isAdmin && setLightbox(!lightbox)
  }

  return (
    <Unit
      className="image-gallery"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <div className="image-gallery__grid">
            <Repeater
              propName="images"
              itemProps={{ handleLighbox }}
              renderItemWrapper={(image) => {
                const img = image.props.value.values.image

                const getSpanEstimate = (width, height) => {
                  if (width < height) {
                    return 2
                  }

                  return 1
                }

                const style = {
                  gridColumnEnd: `span 1`,
                  gridRowEnd: `span ${getSpanEstimate(img.width, img.height)}`,
                }

                return (
                  <div className="image-gallery__grid__element" style={style}>
                    {image}
                  </div>
                )
              }}
            />
          </div>
          <Lightbox show={lightbox} close={() => setLightbox(false)}>
            <Repeater
              propName="images"
              renderWrapper={(images) => (
                <div className="image-gallery__lightbox__gallery">{images}</div>
              )}
              renderItemWrapper={(image) => (
                <div className="image-gallery__lightbox__element">{image}</div>
              )}
            />
          </Lightbox>
        </Column>
      </Row>
    </Unit>
  )
}

ImageGallery.schema = {
  name: 'image-gallery',
  label: 'Bildergalerie',
  getDefaultProps: () => ({
    ...LayoutDefaultProps,
  }),
  repeaterItems: [
    {
      name: 'images',
      itemType: 'image',
      itemLabel: 'Bild',
      max: 8,
    },
  ],
  sideEditProps: [LayoutProps],
}

export default ImageGallery
