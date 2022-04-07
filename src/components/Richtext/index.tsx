import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface RichtextProps {
  invert: boolean
}

const Richtext: React.FC<RichtextProps> = ({ invert, children }) => {
  return (
    <div className={classNames(styles.richtext, invert && styles.invert)}>
      {children}
    </div>
  )
}

export default Richtext
