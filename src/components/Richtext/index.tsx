import React from 'react'
import styles from './styles.module.scss'

const Richtext: React.FC = ({ children }) => {
  return <div className={styles.richtext}>{children}</div>
}

export default Richtext
