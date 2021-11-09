import cx from 'classnames'
import React from 'react'
import './Brick.scss'

interface BrickProps {
  children: React.ReactNode
  className?: string
  contrained?: boolean
  displaced?: boolean
}

const Brick: React.FC<BrickProps> = ({
  children,
  className,
  contrained,
  displaced,
}) => {
  return (
    <div
      className={cx({
        brick: true,
        [`brick--contrained`]: contrained,
        [`brick--displaced`]: displaced,
        [`${className}`]: className,
      })}
    >
      {children}
    </div>
  )
}

Brick.defaultProps = {
  contrained: false,
  displaced: false,
}

export default Brick
