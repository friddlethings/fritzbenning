import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import Column from '../../../../components/Grid/Column'
import Row from '../../../../components/Grid/Row'
import styles from './styles.module.scss'

interface KeyValueItemProps {
  items: string
}

const KeyValueItem: types.Brick<KeyValueItemProps> = ({ ...rest }) => {
  return (
    <div className={styles.item} {...rest}>
      <Row>
        <Column xs={12} m={6} gutter={false}>
          <Text
            renderBlock={props => (
              <div className={styles.key}>{props.children}</div>
            )}
            placeholder="Name"
            propName="key"
          />
        </Column>
        <Column xs={12} m={6} gutter={false}>
          <Text
            renderBlock={props => (
              <div className={styles.value}>{props.children}</div>
            )}
            placeholder="Wert"
            propName="value"
          />
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
