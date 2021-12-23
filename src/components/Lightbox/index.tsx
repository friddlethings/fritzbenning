import cx from 'classnames'
import React from 'react'
import './styles.scss'

interface LightboxProps {
  children: React.ReactNode
  show: boolean
  close: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ children, show, close }) => (
  <div className={cx({ lightbox: true, 'is-visible': show })}>
    <div className="lightbox__background" onClick={close} />
    <div className="lightbox__content">{children}</div>
  </div>
)

export default Lightbox
