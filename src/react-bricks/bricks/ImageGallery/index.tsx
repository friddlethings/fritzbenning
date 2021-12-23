import React, { useEffect, useRef, useState } from 'react'
import { Repeater, types, useAdminContext } from 'react-bricks'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Lightbox from '../../../components/Lightbox'
import Slider from '../../../components/Slider'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from '../../sideProps/LayoutProps'
import './styles.scss'

interface ImageGalleryProps extends LayoutInterface {
  images: string[]
}

const ImageGallery: types.Brick<ImageGalleryProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  const [lightbox, setLightbox] = useState(false)
  const sliderRef = useRef(null)
  const firstSliderChildRef = useRef(null)

  const { isAdmin } = useAdminContext()

  const openLightbox = (i: number) => {
    !isAdmin && setLightbox(!lightbox)
    sliderRef.current?.changeIndex(i)
  }

  useEffect(() => {
    console.log(sliderRef)
  }, [sliderRef])

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
              renderItemWrapper={(image, index, imageCount) => {
                const img = image.props.value.values.image

                const getSpanEstimate = (width: number, height: number) => {
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
                  <div
                    className="image-gallery__grid__element"
                    style={style}
                    onClick={() => openLightbox(index)}
                  >
                    {image}
                  </div>
                )
              }}
            />
          </div>
          <Lightbox show={lightbox} close={() => setLightbox(false)}>
            <Slider
              ref={sliderRef}
              childrenCount={firstSliderChildRef.current?.dataset.children}
            >
              <Repeater
                propName="images"
                itemProps={{ lightbox }}
                renderItemWrapper={(item, index, itemCount) => (
                  <div
                    ref={index === 0 ? firstSliderChildRef : null}
                    data-children={itemCount}
                  >
                    {item}
                  </div>
                )}
              />
            </Slider>
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
