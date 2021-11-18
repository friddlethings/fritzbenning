import cx from 'classnames'
import React from 'react'
import './row.scss'

interface RowProps {
  children: React.ReactNode
  align?: 'top' | 'center' | 'bottom'
  withVerticalGap?: boolean
}

const Row: React.FC<RowProps> = ({ children, withVerticalGap, align }) => (
  <div
    className={cx({
      row: true,
      'row--withVerticalGap': withVerticalGap,
      [`align-${align}`]: align,
    })}
  >
    {children}
  </div>
)

Row.defaultProps = {
  align: 'top',
  withVerticalGap: false,
}

export default Row
