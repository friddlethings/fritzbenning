import classNames from 'classnames'
import React from 'react'
import { Image as Img, types } from 'react-bricks/frontend'
import { LayoutInterface } from '../../../sideProps/LayoutProps'
import styles from './styles.module.scss'

interface ImageProps extends LayoutInterface {
  image: string
  title: string
  index: number
  hover: boolean
  frame: boolean
  openLightbox: (i: number) => void
}

const Image: types.Brick<ImageProps> = ({
  title,
  openLightbox,
  index,
  hover,
  frame,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        styles.image,
        hover && styles['with-hover'],
        frame && styles['with-frame']
      )}
      {...rest}
      onClick={() => openLightbox && openLightbox(index)}
    >
      <Img propName="image" alt="Icon" maxWidth={3000} />
      {/* {title && <caption className="image__caption">{title}</caption>} */}
    </div>
  )
}

Image.schema = {
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

Image.defaultProps = {
  hover: true,
  frame: false
}

export default Image
