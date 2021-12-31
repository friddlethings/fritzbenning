import React, { useContext, useEffect } from 'react'
import { cleanPage, ReactBricksContext, types } from 'react-bricks/frontend'
import ErrorNoHomePage from '../components/ErrorNoHomePage'
import ErrorNoKeys from '../components/ErrorNoKeys'
import Column from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import PageTemplate from '../components/PageTemplate'
import Stage from '../components/Stage'
import Teaser from '../components/Teaser'
import Unit from '../components/Unit'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    error: string
    posts: any
    tags: any
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: { page, error, posts, tags },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  useEffect(() => {
    console.log(posts)
    console.log(tags)
  }, [posts, tags])

  return (
    <PageTemplate>
      <Stage
        title="Gedanken. Sideprojects. Fotobücher."
        subheadline="Hier findest du eine wilde Sammlung von Dingen, die ich neben meiner Arbeit als User Experience Designer noch so kreiere. Schau doch mal durch."
      />
      <Unit className="teaser-gallery" paddingTop>
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
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </PageTemplate>
  )
}

export default Page
