import { Link } from 'gatsby'
import React from 'react'
import './Footer.scss'
import Column from './grid/column'
import Row from './grid/row'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Row>
          <Column xs={12} m={6}>
            UX & Tollerei © {new Date().getFullYear()} Fritz Benning
          </Column>
          <Column xs={12} m={6}>
            <nav className="footer__nav">
              <ul>
                <li>
                  <a href="mailto:mail@fritzbenning.de">Say Hi</a>
                </li>
                <li>
                  <Link to="/impressum" activeClassName="is-active">
                    Impressum
                  </Link>
                </li>
              </ul>
            </nav>
          </Column>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
