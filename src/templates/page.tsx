import React, { useContext } from 'react'
import { cleanPage, PageViewer, ReactBricksContext, types } from 'react-bricks'
import ErrorNoHomePage from '../components/errorNoHomePage'
import ErrorNoKeys from '../components/errorNoKeys'
import PageTemplate from '../components/PageTemplate'
import Seo from '../components/Seo'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    error: string
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: { page, error },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return (
    <PageTemplate>
      {pageOk && (
        <>
          <Seo
            title={page.meta.title}
            description={page.meta.description}
            lang={page.meta.language}
          />

          <PageViewer page={pageOk} />
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </PageTemplate>
  )
}

export default Page
