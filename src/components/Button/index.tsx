import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  label: string
  type?: 'button' | 'submit' | 'reset' | any
  onClick?: ((event: any) => void) | ((event: any) => Promise<void>)
}

const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {
  return (
    <button type={type && type} className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
