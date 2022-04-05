import classNames from 'classnames'
import React from 'react'
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

const Image: React.FC<ImageProps> = ({
  children,
  title,
  openLightbox,
  index,
  hover = true,
  frame = false,
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
      {children}
      {/* {title && <caption className="image__caption">{title}</caption>} */}
    </div>
  )
}

export default Image
