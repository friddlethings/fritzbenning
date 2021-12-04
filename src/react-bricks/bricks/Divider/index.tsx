import React from 'react'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'
import './styles.scss'

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
