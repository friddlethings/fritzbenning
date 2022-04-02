import Link from 'next/link'
import React from 'react'
import { Instagram } from 'react-feather'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import styles from './styles.module.scss'

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <Row>
        <Column xs={12} m={6}>
          UX & Tollerei © {new Date().getFullYear()} Fritz Benning
        </Column>
        <Column xs={12} m={6}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="mailto:mail@fritzbenning.de">Say Hi</a>
              </li>
              <li>
                <Link href="/impressum">
                  <a>Impressum</a>
                </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/fritz__ben" target="_blank">
                  <Instagram color="black" size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </Column>
      </Row>
    </div>
  </footer>
)

export default Footer
