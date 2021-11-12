import cx from 'classnames'
import React from 'react'
import './column.scss'

interface ColumnProps {
  children: React.ReactNode
  noGutter?: boolean
  xs?: number
  s?: number
  m?: number
  l?: number
  xl?: number
}

const Column: React.FC<ColumnProps> = ({
  children,
  noGutter,
  xs,
  s,
  m,
  l,
  xl,
}) => (
  <div
    className={cx({
      column: true,
      'column--noGutter': noGutter,
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

Column.defaultProps = {
  noGutter: false,
}

export default Column
