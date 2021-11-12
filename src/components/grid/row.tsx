import cx from 'classnames'
import React from 'react'
import './row.scss'

interface RowProps {
  children: React.ReactNode
  align?: 'top' | 'center' | 'bottom'
  verticalGap?: boolean
}

const Row: React.FC<RowProps> = ({ children, verticalGap, align }) => (
  <div
    className={cx({
      row: true,
      'row--withVerticalGap': verticalGap,
      [`align-${align}`]: align,
    })}
  >
    {children}
  </div>
)

Row.defaultProps = {
  align: 'top',
  verticalGap: false,
}

export default Row
