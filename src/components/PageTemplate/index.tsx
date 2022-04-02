import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles.module.scss'

interface PageTemplateProps {
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={styles.template}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate
