import classNames from 'classnames'
import React from 'react'
import { responsiveProp } from '../../utils/responsiveProp'
import styles from './styles.module.scss'

interface SpacerProps {
  size: number
  sizeWhen?: { s?: number; m?: number; l?: number; xl?: number }
  vertical?: boolean
  horizontal?: boolean
}

const Spacer: React.FC<SpacerProps> = ({
  size,
  sizeWhen,
  vertical = false,
  horizontal = false
}) => {
  return (
    <div
      className={classNames(
        styles.spacer,
        horizontal && responsiveProp(styles, size, sizeWhen, 'width'),
        vertical && responsiveProp(styles, size, sizeWhen, 'height')
      )}
    >
      {vertical && vertical}
    </div>
  )
}

export default Spacer
