import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './styles.scss'

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
