import { Link } from 'gatsby'
import React from 'react'

const Header: React.FC = () => (
  <header>
    <Link to="/">UX & Tollerei</Link>
    <nav>
      <Link to="/ueber-mich">Fritz</Link>
      <Link to="/sideprojects">Sideprojects</Link>
      <Link to="/fotografie">Fotografie</Link>
    </nav>
  </header>
)

export default Header
