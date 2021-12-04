import { Link } from 'gatsby'
import React from 'react'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Logo from '../Logo'
import MainNav from '../MainMenu'
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
