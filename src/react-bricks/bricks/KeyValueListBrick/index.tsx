import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps
} from '../../sideProps/LayoutProps'

interface KeyValueListProps extends LayoutInterface {
  items: string
}

const KeyValueListBrick: types.Brick<KeyValueListProps> = ({
  width,
  paddingTop,
  paddingBottom
}) => {
  return (
    <Unit
      className="key-value-list"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Repeater
        propName="items"
        renderWrapper={items => (
          <Row>
            <Column xs={12}>{items}</Column>
          </Row>
        )}
      />
    </Unit>
  )
}

KeyValueListBrick.schema = {
  name: 'key-value-list',
  label: 'Tabelle',
  getDefaultProps: () => ({
    items: [
      {
        key: 'Name',
        value: 'Wert'
      }
    ],
    ...LayoutDefaultProps
  }),
  repeaterItems: [
    {
      name: 'items',
      itemType: 'key-value-item',
      itemLabel: 'Zeile',
      max: 8
    }
  ],
  sideEditProps: [LayoutProps]
}

export default KeyValueListBrick
