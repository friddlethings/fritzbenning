import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import KeyValueItem from '../../../../components/KeyValueListItem'

interface KeyValueItemProps {
  items: string
}

const KeyValueItemBrick: types.Brick<KeyValueItemProps> = ({ ...rest }) => {
  return (
    <KeyValueItem
      {...rest}
      label={
        <Text
          renderBlock={props => <>{props.children}</>}
          placeholder="Name"
          propName="key"
        />
      }
      value={
        <Text
          renderBlock={props => <>{props.children}</>}
          placeholder="Wert"
          propName="value"
        />
      }
    />
  )
}

KeyValueItemBrick.schema = {
  name: 'key-value-item',
  label: 'Tabellenzeile',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    key: 'Name',
    value: 'Wert'
  })
}

export default KeyValueItemBrick
