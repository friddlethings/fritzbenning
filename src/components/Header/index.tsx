import { Link } from 'gatsby'
import React from 'react'
import Logo from '../Logo'
import MainNav from '../MainMenu'
import Column from '../_grid/Column'
import Row from '../_grid/Row'
import './styles.scss'

const Header: React.FC = () => (
  <header className="header">
    <Row align="center">
      <Column xs={12} m={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Column>
      <Column xs={12} m={8} justify="left" mJustify="right">
        <MainNav />
      </Column>
    </Row>
  </header>
)

export default Header
