import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

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
  gutter
}) => (
  <div
    className={classNames(
      styles.column,
      gutter && styles['with-gutter'],
      xs && styles[`xs-${xs}`],
      s && styles[`s-${s}`],
      m && styles[`m-${m}`],
      l && styles[`l-${l}`],
      xl && styles[`xl-${xl}`]
    )}
  >
    {children}
  </div>
)

Column.defaultProps = {
  gutter: true
}

export default Column
