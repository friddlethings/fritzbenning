import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface LoadingProps {
  ready: boolean
}

const Loading: React.FC<LoadingProps> = ({ children, ready }) => {
  return (
    <div className={classNames(styles.loading, ready && styles.ready)}>
      {children}
    </div>
  )
}

export default Loading
