import React from 'react'
import { types } from 'react-bricks/frontend'
import Line from '../../../components/Divider'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'

const Divider: types.Brick = () => {
  return (
    <Unit>
      <Row>
        <Column xs={12}>
          <Line />
        </Column>
      </Row>
    </Unit>
  )
}

Divider.schema = {
  name: 'divider',
  label: 'Trennlinie',
  getDefaultProps: () => ({}),
}

export default Divider
