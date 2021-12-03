import React from 'react'
import { Image as Img, types } from 'react-bricks'
import './Image.scss'
import { LayoutInterface } from './sideProps/LayoutProps'

interface ImageProps extends LayoutInterface {
  image: string
  title: string
  handleLighbox: () => void
}

const Image: types.Brick<ImageProps> = ({ title, handleLighbox, ...rest }) => {
  return (
    <div className="image" {...rest} onClick={handleLighbox}>
      <Img propName="image" alt="Icon" maxWidth={3000} />
      {title && <caption className="image__caption">{title}</caption>}
    </div>
  )
}

Image.schema = {
  name: 'image',
  label: 'Bild',
  getDefaultProps: () => ({
    title: 'Titel',
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

export default Image
