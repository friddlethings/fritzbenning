import { Link } from 'gatsby'
import React from 'react'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Logo from '../Logo'
import MainNav from '../MainNav'
import './styles.scss'

const Header: React.FC = () => (
  <header className="header">
    <div className="header__folding-edge" />
    <Row align="center">
      <Column xs={12} m={4}>
        <Link to="/">
          <Logo />
        </Link>
      </Column>
      <Column xs={12} m={8}>
        <MainNav />
      </Column>
    </Row>
  </header>
)

export default Header
