import cx from 'classnames'
import React from 'react'
import './Brick.scss'

interface BrickProps {
  children: React.ReactNode
  className?: string
  displaced?: boolean
  width?: 'full' | 'default' | 'content'
  paddingTop?: boolean
  paddingBottom?: boolean
}

const Brick: React.FC<BrickProps> = ({
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

Brick.defaultProps = {
  width: 'default',
  paddingTop: true,
  paddingBottom: true,
}

export default Brick
