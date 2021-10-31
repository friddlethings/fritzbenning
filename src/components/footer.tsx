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
            UX & Tollerei – Fritz Benning
          </Column>
          <Column xs={12} m={6} mJustify="right">
            © {new Date().getFullYear()} Fritz Benning
          </Column>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
