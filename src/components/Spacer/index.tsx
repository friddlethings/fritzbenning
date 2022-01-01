import React from 'react'
import './styles.scss'

interface SpacerProps {
  size: number
}

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  console.log(size)

  return (
    <div className="spacer" style={{ width: size * 8, height: size * 8 }} />
  )
}

export default Spacer
