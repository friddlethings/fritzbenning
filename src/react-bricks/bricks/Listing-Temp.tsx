import React from 'react'
import { Repeater, types } from 'react-bricks'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import Unit from '../../components/Unit'
import './Listing.scss'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from './sideProps/LayoutProps'

interface ListingProps extends LayoutInterface {
  items: string
}

const Listing: types.Brick<ListingProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Unit
      className="listing"
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

Listing.schema = {
  name: 'listing',
  label: 'Liste',
  getDefaultProps: () => ({
    items: [
      {
        text: 'Listenelement',
      },
    ],
    ...LayoutDefaultProps,
  }),
  repeaterItems: [
    {
      name: 'items',
      itemType: 'listing-item',
      itemLabel: 'Listenelement',
      max: 8,
    },
  ],
  sideEditProps: [LayoutProps],
}

export default Listing
