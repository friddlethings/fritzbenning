import React from 'react'
import styles from './styles.module.scss'

const Logo: React.FC = () => (
  <div className={styles.logo}>
    {/* UX <span className={styles.highlight}>&</span> Tollerei */}
    <span className={styles.highlight}>Friddle</span>'s Blog
  </div>
)

export default Logo
