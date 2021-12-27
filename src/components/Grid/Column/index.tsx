import cx from 'classnames'
import React from 'react'
import './styles.scss'

interface ColumnProps {
  children: React.ReactNode
  xs?: number
  s?: number
  m?: number
  l?: number
  xl?: number
  gutter?: boolean
}

const Column: React.FC<ColumnProps> = ({
  children,
  xs,
  s,
  m,
  l,
  xl,
  gutter,
}) => (
  <div
    className={cx({
      column: true,
      'with-gutter': gutter,
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
  gutter: true,
}

export default Column
