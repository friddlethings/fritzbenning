import cx from 'classnames'
import React from 'react'
import { Image as Img, types } from 'react-bricks'
import { LayoutInterface } from '../../../sideProps/LayoutProps'
import './styles.scss'

interface ImageProps extends LayoutInterface {
  image: string
  title: string
  index: number
  lightbox: boolean
}

const Image: types.Brick<ImageProps> = ({ title, lightbox, ...rest }) => {
  return (
    <div className={cx({ image: true, 'image--lightbox': lightbox })} {...rest}>
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
