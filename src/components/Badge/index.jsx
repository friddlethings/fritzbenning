import React from 'react'
import styles from './styles.module.scss'

const Badge = ({ text }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Badge
