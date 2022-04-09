import React, { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles.module.scss'

interface PageTemplateProps {
  children: React.ReactNode
  splitMobile?: number
  splitDesktop?: number
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  const { ref, width = 0, height = 0 } = useResizeObserver()

  const [splitHeight, setSplitHeight] = useState(0)

  useEffect(() => {
    const anchor = document.querySelector('#background-anchor')

    if (anchor) {
      const newSplitHeight =
        anchor.getBoundingClientRect().top +
        window.scrollY +
        anchor.clientHeight / 2

      setSplitHeight(newSplitHeight)
    }
  }, [width, height])

  return (
    <div
      ref={ref}
      className={styles['page-template']}
      style={{
        ['--height' as any]: splitHeight + 'px'
      }}
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageTemplate
