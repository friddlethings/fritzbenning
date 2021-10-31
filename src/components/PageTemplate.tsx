import React from 'react'
import Footer from './footer'
import Header from './header'
import './PageTemplate.scss'

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <main className="page-template__main">{children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate
