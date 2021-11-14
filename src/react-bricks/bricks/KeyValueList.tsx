import React from 'react'
import { Repeater, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from './sideProps/LayoutProps'
import './TeaserGallery.scss'

interface KeyValueListProps extends LayoutInterface {
  items: string
}

const KeyValueList: types.Brick<KeyValueListProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Brick
      className="key-value-list"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
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
    ...LayoutDefaultProps,
  }),
  repeaterItems: [
    {
      name: 'items',
      itemType: 'key-value-item',
      itemLabel: 'Zeile',
      max: 8,
    },
  ],
  sideEditProps: [LayoutProps],
}

export default KeyValueList
