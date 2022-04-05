import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import ListingItem from '../../../../components/ListingItem'

interface ListingItemProps {
  items: string
}

const ListingItemBrick: types.Brick<ListingItemProps> = ({ ...rest }) => {
  return (
    <ListingItem>
      <Text
        renderBlock={props => <>{props.children}</>}
        placeholder="Name"
        propName="key"
      />
    </ListingItem>
  )
}

ListingItemBrick.schema = {
  name: 'listing-item',
  label: 'Listeneintrag',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Neues Element'
  })
}

export default ListingItemBrick
