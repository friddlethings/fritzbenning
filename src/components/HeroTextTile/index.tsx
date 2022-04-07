import React from 'react'
import Richtext from '../Richtext'
import styles from './styles.module.scss'

const HeroTextTile = ({ children }) => {
  return (
    <div className={styles['hero-text-tile']}>
      <Richtext invert>{children}</Richtext>
    </div>
  )
}

export default HeroTextTile
