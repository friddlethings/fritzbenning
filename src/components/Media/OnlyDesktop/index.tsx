import React from 'react'
import './styles.scss'

interface OnlyDesktopProps {
  children: React.ReactNode
}

const OnlyDesktop: React.FC<OnlyDesktopProps> = ({ children }) => (
  <div className="only-desktop">{children}</div>
)

export default OnlyDesktop
