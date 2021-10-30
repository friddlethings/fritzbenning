import { Link } from 'gatsby'
import React from 'react'
import Column from './grid/column'
import Row from './grid/row'
import './header.scss'
import Logo from './logo'

const Header: React.FC = () => (
  <header className="header">
    <Row align="center">
      <Column xs={12} m={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Column>
      <Column xs={12} m={8} justify="left" mJustify="right">
        <Link to="/ueber-mich">Fritz</Link>
        <Link to="/sideprojects">Sideprojects</Link>
        <Link to="/fotografie">Fotografie</Link>
      </Column>
    </Row>
  </header>
)

export default Header
