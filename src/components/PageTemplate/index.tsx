import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles.module.scss'

interface PageTemplateProps {
  children: React.ReactNode
  split?: 50 | 64
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  split = 50
}) => {
  return (
    <div
      className={styles['page-template']}
      style={{ ['--height' as any]: split + 'vh' }}
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate
