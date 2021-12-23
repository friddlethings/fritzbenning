import React from 'react'
import './styles.scss'

interface LightboxControllerProps {
  lightboxIndex: number
  changeIndex: any
}

const LightboxController: React.FC<LightboxControllerProps> = ({
  lightboxIndex,
  changeIndex,
}) => (
  <div className="lightbox-controller">
    <div className="lightbox-controller__next">
      <button onClick={() => changeIndex(lightboxIndex + 1)}>Increase</button>
    </div>
    {lightboxIndex > 0 && (
      <div className="lightbox-controller__prev">
        <button onClick={() => changeIndex(lightboxIndex - 1)}>Decrease</button>
      </div>
    )}
  </div>
)

export default LightboxController
