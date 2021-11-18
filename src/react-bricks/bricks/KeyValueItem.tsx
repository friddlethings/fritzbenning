import React from 'react'
import { Text, types } from 'react-bricks'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import './KeyValueItem.scss'

interface KeyValueItemProps {
  items: string
}

const KeyValueItem: types.Brick<KeyValueItemProps> = ({ ...rest }) => {
  return (
    <div className="key-value-item" {...rest}>
      <Row>
        <Column xs={6} noGutter>
          <Text
            renderBlock={(props) => (
              <div className="key-value-item__key">{props.children}</div>
            )}
            placeholder="Name"
            propName="key"
          />
        </Column>
        <Column xs={6} noGutter>
          <Text
            renderBlock={(props) => (
              <div className="key-value-item__value">{props.children}</div>
            )}
            placeholder="Wert"
            propName="value"
          />
        </Column>
      </Row>
    </div>
  )
}

KeyValueItem.schema = {
  name: 'key-value-item',
  label: 'Tabellenzeile',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    key: 'Name',
    value: 'Wert',
  }),
}

export default KeyValueItem
