import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

const Notifaction = ({ children, type }) => {
  return (
    <div className={classNames(styles.notification, styles[type])}>
      {children}
    </div>
  )
}

export default Notifaction
