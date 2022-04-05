import React from 'react'
import { Image as Img, types } from 'react-bricks/frontend'
import Image from '../../../../components/Image'
import { LayoutInterface } from '../../../sideProps/LayoutProps'

interface ImageProps extends LayoutInterface {
  image: string
  title: string
  index: number
  hover: boolean
  frame: boolean
  openLightbox: (i: number) => void
}

const ImageBrick: types.Brick<ImageProps> = ({
  title,
  openLightbox,
  index,
  hover,
  frame,
  ...rest
}) => {
  return (
    <Image
      title={title}
      openLightbox={openLightbox}
      index={index}
      hover={hover}
      frame={frame}
      {...rest}
    >
      <Img propName="image" alt="Icon" maxWidth={3000} />
    </Image>
  )
}

ImageBrick.schema = {
  name: 'image',
  label: 'Bild',
  getDefaultProps: () => ({
    title: 'Titel'
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Bildunterschrift',
      show: props => true,
      type: types.SideEditPropType.Text
    }
  ]
}

export default ImageBrick
