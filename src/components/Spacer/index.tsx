import React from 'react'
import styles from './styles.module.scss'

interface SpacerProps {
  size: number
  vertical?: boolean
  horizontal?: boolean
}

const Spacer: React.FC<SpacerProps> = ({
  size,
  vertical = false,
  horizontal = false
}) => {
  return (
    <div
      className={styles.spacer}
      style={{
        width: horizontal ? size * 8 : '100%',
        height: vertical ? size * 8 : 0
      }}
    >
      {vertical && vertical}
    </div>
  )
}

export default Spacer
