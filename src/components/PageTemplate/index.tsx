import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './styles.scss'

interface PageTemplateProps {
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <main className="page-template__main">{children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate
