import React from 'react'
import { Repeater, types } from 'react-bricks'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import Unit from '../../components/Unit'
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
    <Unit
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
    </Unit>
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
