import Link from 'next/link'
import React from 'react'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Logo from '../Logo'
import MainNav from '../MainNav'
import styles from './styles.module.scss'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles['folding-edge']} />
    <Row align="center">
      <Column xs={12} m={4}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Column>
      <Column xs={12} m={8}>
        <MainNav />
      </Column>
    </Row>
  </header>
)

export default Header
