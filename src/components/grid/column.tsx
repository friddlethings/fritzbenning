import cx from 'classnames'
import React from 'react'
import './column.scss'

interface ColumnProps {
  children: React.ReactNode
  xs?: number
  s?: number
  m?: number
  l?: number
  xl?: number
}

const Column: React.FC<ColumnProps> = ({ children, xs, s, m, l, xl }) => (
  <div
    className={cx({
      column: true,
      [`xs-${xs}`]: xs,
      [`s-${s}`]: s,
      [`m-${m}`]: m,
      [`l-${l}`]: l,
      [`xl-${xl}`]: xl,
    })}
  >
    {children}
  </div>
)

export default Column
