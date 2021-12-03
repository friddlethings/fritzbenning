import cx from 'classnames'
import React from 'react'
import './Unit.scss'

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
        brick: true,
        [`brick--${width}`]: width,
        [`brick--withPaddingTop`]: paddingTop,
        [`brick--withPaddingBottom`]: paddingBottom,
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
