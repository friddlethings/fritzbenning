import React from 'react'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Unit from '../../components/Unit'
import './Divider.scss'

const Divider = () => {
  return (
    <Unit className="divider">
      <Row>
        <Column xs={12}>
          <div className="divider__inner" />
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
