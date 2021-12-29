import cx from 'classnames'
import React, { useRef, useState } from 'react'
import { Repeater, types, useAdminContext } from 'react-bricks/frontend'
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
  columns: number
}

const ImageGallery: types.Brick<ImageGalleryProps> = ({
  columns,
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

  return (
    <Unit
      className="image-gallery"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <div
            className={cx({
              'image-gallery__grid': true,
              [`with-${columns}-columns`]: columns,
            })}
          >
            <Repeater
              propName="images"
              itemProps={{ openLightbox }}
              renderItemWrapper={(image) => {
                const img = image.props.value.values.image

                let portrait = false

                const getSpanEstimate = (width: number, height: number) => {
                  if (width < height) {
                    portrait = true
                    return 2
                  }

                  return 1
                }

                const style = {
                  gridColumnEnd: `span 1`,
                  gridRowEnd: `span ${
                    img && getSpanEstimate(img.width, img.height)
                  }`,
                }

                return (
                  <div
                    className={cx({
                      'image-gallery__grid__element': true,
                      'image-gallery__grid__element--portrait': portrait,
                    })}
                    style={style}
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
                itemProps={{ hover: false, frame: true }}
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
    columns: 3,
    ...LayoutDefaultProps,
  }),
  repeaterItems: [
    {
      name: 'images',
      itemType: 'image',
      itemLabel: 'Bild',
      max: 16,
    },
  ],
  sideEditProps: [
    LayoutProps,
    {
      name: 'columns',
      label: 'Spalten',
      type: types.SideEditPropType.Number,
      validate: (value: number) => (value >= 2 && value <= 3 ? true : false),
      rangeOptions: {
        min: 2,
        max: 3,
        step: 1,
      },
    },
  ],
}

export default ImageGallery
