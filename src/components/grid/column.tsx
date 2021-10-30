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
  align?: 'top' | 'center' | 'bottom'
  justify?: 'left' | 'center' | 'right'
  sJustify?: 'left' | 'center' | 'right'
  mJustify?: 'left' | 'center' | 'right'
  lJustify?: 'left' | 'center' | 'right'
  xlJustify?: 'left' | 'center' | 'right'
}

const Column: React.FC<ColumnProps> = ({
  children,
  xs,
  s,
  m,
  l,
  xl,
  align,
  justify,
  sJustify,
  mJustify,
  lJustify,
  xlJustify,
}) => (
  <div
    className={cx({
      column: true,
      [`xs-${xs}`]: xs,
      [`s-${s}`]: s,
      [`m-${m}`]: m,
      [`l-${l}`]: l,
      [`xl-${xl}`]: xl,
      [`align-${align}`]: align,
      [`justify-${justify}`]: justify,
      [`justify-s-${sJustify}`]: sJustify,
      [`justify-m-${mJustify}`]: mJustify,
      [`justify-l-${lJustify}`]: lJustify,
      [`justify-xl-${xlJustify}`]: xlJustify,
    })}
  >
    {children}
  </div>
)

Column.defaultProps = {
  align: 'top',
  justify: 'left',
}

export default Column
