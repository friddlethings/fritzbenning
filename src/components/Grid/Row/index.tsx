import cx from 'classnames'
import React from 'react'
import './styles.scss'

interface RowProps {
  children: React.ReactNode
  align?: 'top' | 'center' | 'bottom'
  withVerticalGap?: boolean
}

const Row: React.FC<RowProps> = ({ children, withVerticalGap, align }) => (
  <div
    className={cx({
      row: true,
      'with-vertical-gap': withVerticalGap,
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
