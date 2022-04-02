import React from 'react'
import styles from './styles.module.scss'

interface OnlyDesktopProps {
  children: React.ReactNode
}

const OnlyDesktop: React.FC<OnlyDesktopProps> = ({ children }) => (
  <div className={styles['only-desktop']}>{children}</div>
)

export default OnlyDesktop
