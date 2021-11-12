import React from 'react'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import './Divider.scss'

const Divider = () => {
  return (
    <Brick className="divider" displaced>
      <Row>
        <Column xs={12}>
          <div className="divider__inner" />
        </Column>
      </Row>
    </Brick>
  )
}

Divider.schema = {
  name: 'divider',
  label: 'Trennlinie',
  getDefaultProps: () => ({}),
}

export default Divider
