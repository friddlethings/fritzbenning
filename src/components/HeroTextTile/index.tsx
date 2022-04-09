import React from 'react'
import Richtext from '../Richtext'
import styles from './styles.module.scss'

interface HeroTextTileProps {
  id?: string
}

const HeroTextTile: React.FC<HeroTextTileProps> = ({ children, id }) => {
  return (
    <div className={styles['hero-text-tile']} id={id}>
      <Richtext invert>{children}</Richtext>
    </div>
  )
}

export default HeroTextTile
