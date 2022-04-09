import React from 'react'
import styles from './styles.module.scss'

const Button = ({ label, type, onClick }) => {
  return (
    <button type={type && type} className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
