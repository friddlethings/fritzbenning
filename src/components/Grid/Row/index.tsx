import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface RowProps {
  children: React.ReactNode
  align?: 'top' | 'center' | 'bottom'
  withVerticalGap?: boolean
}

const Row: React.FC<RowProps> = ({ children, withVerticalGap, align }) => (
  <div
    className={classNames(
      styles.row,
      withVerticalGap && styles['with-vertical-gap'],
      align && styles[`align-${align}`]
    )}
  >
    {children}
  </div>
)

Row.defaultProps = {
  align: 'top',
  withVerticalGap: false
}

export default Row
