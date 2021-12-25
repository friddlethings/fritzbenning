import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Spacer from '../../../components/Spacer'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from '../../sideProps/LayoutProps'
import './styles.scss'

interface ListingProps extends LayoutInterface {
  title: string
  firstColumnItems: string
  secondColumnItems: string
  columns: 1 | 2
}

const Listing: types.Brick<ListingProps> = ({
  title,
  width,
  columns,
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
      {title && (
        <>
          <Row>
            <Column xs={12}>
              <h5>{title}</h5>
            </Column>
          </Row>
          <Spacer size={1} />
        </>
      )}
      <Row>
        <Column xs={columns === 2 ? 6 : 12}>
          <Repeater propName="firstColumnItems" />
        </Column>
        {columns === 2 && (
          <Column xs={6}>
            <Repeater propName="secondColumnItems" />
          </Column>
        )}
      </Row>
    </Unit>
  )
}

Listing.schema = {
  name: 'listing',
  label: 'Liste',
  getDefaultProps: () => ({
    title: 'Titel',
    firstColumnItems: [
      {
        text: 'Listenelement',
      },
    ],
    secondColumnItems: [
      {
        text: 'Listenelement',
      },
    ],
    columns: 2,
    ...LayoutDefaultProps,
  }),
  repeaterItems: [
    {
      name: 'firstColumnItems',
      itemType: 'listing-item',
      itemLabel: 'Element (Erste Spalte)',
      max: 8,
    },
    {
      name: 'secondColumnItems',
      itemType: 'listing-item',
      itemLabel: 'Element (Zweite Spalte)',
      max: 8,
    },
  ],
  sideEditProps: [
    LayoutProps,
    {
      groupName: 'Liste',
      defaultOpen: true,
      props: [
        {
          name: 'title',
          label: 'Überschrift',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'columns',
          label: 'Spalten',
          type: types.SideEditPropType.Number,
          rangeOptions: {
            min: 1,
            max: 2,
            step: 1,
          },
        },
      ],
    },
  ],
}

export default Listing
