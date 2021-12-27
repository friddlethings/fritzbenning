import cx from 'classnames'
import React from 'react'
import './styles.scss'

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
  paddingBottom,
}) => {
  return (
    <div
      className={cx({
        unit: true,
        [`unit--${width}`]: width,
        [`unit--withPaddingTop`]: paddingTop,
        [`unit--withPaddingBottom`]: paddingBottom,
        [`${className}`]: className,
      })}
    >
      {children}
    </div>
  )
}

Unit.defaultProps = {
  width: 'default',
  paddingTop: true,
  paddingBottom: true,
}

export default Unit
