import React from 'react'
import { Repeater, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import './TeaserGallery.scss'

interface KeyValueListProps {
  items: string
}

const KeyValueList: types.Brick<KeyValueListProps> = () => {
  return (
    <Brick className="key-value-list" displaced>
      <Repeater
        propName="items"
        renderWrapper={(items) => (
          <Row>
            <Column xs={12}>{items}</Column>
          </Row>
        )}
      />
    </Brick>
  )
}

KeyValueList.schema = {
  name: 'key-value-list',
  label: 'Tabelle',
  getDefaultProps: () => ({
    items: [
      {
        key: 'Name',
        value: 'Wert',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'items',
      itemType: 'key-value-item',
      itemLabel: 'Zeile',
      max: 8,
    },
  ],
}

export default KeyValueList
