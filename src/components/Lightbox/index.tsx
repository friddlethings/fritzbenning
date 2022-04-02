import cx from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface LightboxProps {
  children: React.ReactNode
  show: boolean
  close: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ children, show, close }) => (
  <div className={cx(styles.lightbox, show && styles['is-visible'])}>
    <div className={styles.background} onClick={close} />
    <div className={styles.content}>{children}</div>
  </div>
)

export default Lightbox
