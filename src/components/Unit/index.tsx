import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface UnitProps {
  children: React.ReactNode
  className?: string
  width?: 'full' | 'default' | 'content'
  paddingTop?: boolean
  paddingBottom?: boolean
}

const Unit: React.FC<UnitProps> = ({
  children,
  className,
  width,
  paddingTop,
  paddingBottom
}) => {
  return (
    <div
      className={classNames(
        styles.unit,
        width && styles[width],
        paddingTop && styles['with-padding-top'],
        paddingBottom && styles['with-padding-bottom'],
        className && className
      )}
    >
      {children}
    </div>
  )
}

Unit.defaultProps = {
  width: 'default',
  paddingTop: true,
  paddingBottom: true
}

export default Unit
