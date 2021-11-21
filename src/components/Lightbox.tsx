import React from 'react'
import './Lightbox.scss'

interface LightboxProps {
  children: React.ReactNode
  close: any
}

const Lightbox: React.FC<LightboxProps> = ({ children, close }) => (
  <div className="lightbox" onClick={close}>
    <div className="lightbox__content">{children}</div>
  </div>
)

export default Lightbox
