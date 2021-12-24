import React from 'react'
import './styles.scss'

const OnlyDesktop: React.FC = ({ children }) => (
  <div className="only-desktop">{children}</div>
)

export default OnlyDesktop
