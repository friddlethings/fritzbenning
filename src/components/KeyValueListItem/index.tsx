import React from 'react'
import { types } from 'react-bricks/frontend'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import styles from './styles.module.scss'

interface KeyValueItemProps {
  label: JSX.Element
  value: JSX.Element
}

const KeyValueItem: types.Brick<KeyValueItemProps> = ({
  label,
  value,
  ...rest
}) => {
  return (
    <div className={styles.item} {...rest}>
      <Row>
        <Column xs={12} m={6} gutter={false}>
          {label}
        </Column>
        <Column xs={12} m={6} gutter={false}>
          {value}
        </Column>
      </Row>
    </div>
  )
}

KeyValueItem.schema = {
  name: 'key-value-item',
  label: 'Tabellenzeile',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    key: 'Name',
    value: 'Wert'
  })
}

export default KeyValueItem
