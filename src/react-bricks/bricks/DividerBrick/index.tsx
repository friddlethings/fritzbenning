import React from 'react'
import { types } from 'react-bricks/frontend'
import Divider from '../../../components/Divider'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'

const DividerBrick: types.Brick = () => {
  return (
    <Unit>
      <Row>
        <Column xs={12}>
          <Divider />
        </Column>
      </Row>
    </Unit>
  )
}

DividerBrick.schema = {
  name: 'divider',
  label: 'Trennlinie',
  getDefaultProps: () => ({})
}

export default DividerBrick
