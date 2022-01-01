import { Link } from 'gatsby'
import React, { useContext } from 'react'
import {
  cleanPage,
  PageViewer,
  ReactBricksContext,
  types,
} from 'react-bricks/frontend'
import Divider from '../components/Divider'
import ErrorNoHomePage from '../components/ErrorNoHomePage'
import ErrorNoKeys from '../components/ErrorNoKeys'
import Column from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import PageTemplate from '../components/PageTemplate'
import Spacer from '../components/Spacer'
import Teaser from '../components/Teaser'
import Unit from '../components/Unit'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    error: string
    posts: any
    lastLostplacePosts: any
    lastTravelPosts: any
    lastSideprojectPosts: any
    tags: any
  }
}

const Frontpage: React.FC<ReactBricksPageProps> = ({
  pageContext: {
    page,
    error,
    posts,
    lastLostplacePosts,
    lastTravelPosts,
    lastSideprojectPosts,
    tags,
  },
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  console.log(posts)

  return (
    <PageTemplate>
      {/* <Stage
        title="Gedanken. Sideprojects. Fotobücher."
        subheadline="Hier findest du eine wilde Sammlung von Dingen, die ich neben meiner Arbeit als User Experience Designer noch so kreiere. Schau doch mal durch."
      /> */}
      <PageViewer page={pageOk} />
      <Unit paddingTop>
        <Row>
          <Column xs={12}>
            <Link to="/tag/lostplace">
              <h5>#lostplaces</h5>
            </Link>
          </Column>
          <Spacer size={5} />
        </Row>
        <Row withVerticalGap>
          {lastLostplacePosts.map((post: any) => (
            <Column xs={12} m={6} l={4}>
              <Teaser
                title={post.meta.title}
                image={post.meta.featuredImage}
                to={`/blog/${post.slug}`}
              />
            </Column>
          ))}
        </Row>
      </Unit>
      <Unit>
        <Row>
          <Column xs={12}>
            <Divider />
          </Column>
        </Row>
      </Unit>
      <Unit paddingTop>
        <Row>
          <Column xs={12}>
            <Link to="/tag/travel">
              <h5>#travel</h5>
            </Link>
          </Column>
          <Spacer size={5} />
        </Row>
        <Row withVerticalGap>
          {lastTravelPosts.map((post: any) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.meta.title}
                image={post.meta.featuredImage}
                to={`/blog/${post.slug}`}
              />
            </Column>
          ))}
        </Row>
      </Unit>
      <Unit>
        <Row>
          <Column xs={12}>
            <Divider />
          </Column>
        </Row>
      </Unit>
      <Unit paddingTop>
        <Row>
          <Column xs={12}>
            <Link to="/tag/sideproject">
              <h5>#sideproject</h5>
            </Link>
          </Column>
          <Spacer size={5} />
        </Row>
        <Row withVerticalGap>
          {lastSideprojectPosts.map((post: any) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.meta.title}
                image={post.meta.featuredImage}
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

export default Frontpage
