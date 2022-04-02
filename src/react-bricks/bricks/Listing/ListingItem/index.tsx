import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import styles from './styles.module.scss'

interface ListingItemProps {
  items: string
}

const ListingItem: types.Brick<ListingItemProps> = ({ ...rest }) => {
  return (
    <div className={styles.item} {...rest}>
      <Text
        renderBlock={props => <>{props.children}</>}
        placeholder="Name"
        propName="key"
      />
    </div>
  )
}

ListingItem.schema = {
  name: 'listing-item',
  label: 'Listeneintrag',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Neues Element'
  })
}

export default ListingItem
