import React from 'react'
import styles from './styles.module.scss'

const ListingItem: React.FC = ({ children, ...rest }) => {
  return (
    <div className={styles.item} {...rest}>
      {children}
    </div>
  )
}

export default ListingItem
