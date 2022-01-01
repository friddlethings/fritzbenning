import React, { useContext } from 'react'
import {
  cleanPage,
  PageViewer,
  ReactBricksContext,
  types,
} from 'react-bricks/frontend'
import ErrorNoHomePage from '../components/ErrorNoHomePage'
import ErrorNoKeys from '../components/ErrorNoKeys'
import Column from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import PageTemplate from '../components/PageTemplate'
import Seo from '../components/Seo'
import Teaser from '../components/Teaser'
import Unit from '../components/Unit'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    posts: types.Page[]
    error: string
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: { page, posts, error },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

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
          <Unit paddingTop>
            <Row withVerticalGap>
              {posts.map((post: any) => (
                <Column xs={12} m={6}>
                  <Teaser
                    title={post.meta.title}
                    image={post.meta.featuredImage}
                    tags={post.tags}
                    to={`/blog/${post.slug}`}
                  />
                </Column>
              ))}
            </Row>
          </Unit>
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </PageTemplate>
  )
}

export default Page
