import cx from 'classnames'
import React from 'react'
import './row.scss'

interface RowProps {
  children: React.ReactNode
  align?: 'top' | 'center' | 'bottom'
}

const Row: React.FC<RowProps> = ({ children, align }) => (
  <div
    className={cx({
      row: true,
      [`align-${align}`]: align,
    })}
  >
    {children}
  </div>
)

Row.defaultProps = {
  align: 'top',
}

export default Row
