import React from 'react'
import styles from './styles.module.scss'

const TagHeadline: React.FC = ({ children }) => {
  return <h2 className={styles['tag-headline']}>{children}</h2>
}

export default TagHeadline
