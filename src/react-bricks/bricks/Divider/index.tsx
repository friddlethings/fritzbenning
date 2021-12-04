import React from 'react'
import Unit from '../../../components/Unit'
import Column from '../../../components/_grid/Column'
import Row from '../../../components/_grid/Row'
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
