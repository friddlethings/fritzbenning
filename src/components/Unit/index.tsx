import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface UnitProps {
  children: React.ReactNode
  className?: string
  width?: 'full' | 'default' | 'content'
  paddingTop?: boolean
  paddingBottom?: boolean
  banner?: boolean
}

const Unit: React.FC<UnitProps> = ({
  children,
  className,
  width,
  paddingTop,
  paddingBottom,
  banner = false
}) => {
  return (
    <div
      className={classNames(
        styles.unit,

        paddingTop && styles['with-padding-top'],
        paddingBottom && styles['with-padding-bottom'],
        banner && styles.banner,
        className && className
      )}
    >
      <div className={classNames(styles.inner, width && styles[width])}>
        {children}
      </div>
    </div>
  )
}

Unit.defaultProps = {
  width: 'default',
  paddingTop: true,
  paddingBottom: true
}

export default Unit
