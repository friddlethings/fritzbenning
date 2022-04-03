import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { useContext } from 'react'
import {
  cleanPage,
  fetchPage,
  fetchPages,
  PageViewer,
  ReactBricksContext,
  types
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
import config from '../react-bricks/config'

interface ReactBricksPageProps {
  page: types.Page
  error: string
  posts: any
  lastPosts: any
  tags: any
}

const Frontpage: React.FC<ReactBricksPageProps> = ({
  page,
  error,
  posts,
  lastPosts,
  tags
}) => {
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  console.log(posts)

  return (
    <PageTemplate split={64}>
      <PageViewer page={pageOk} />
      <Unit paddingTop>
        <Row>
          <Column xs={12}>
            <Link href="/tag/lostplace">
              <a>
                <h5>#lostplaces</h5>
              </a>
            </Link>
          </Column>
          <Spacer size={3} sizeWhen={{ l: 4 }} vertical />
        </Row>
        <Row withVerticalGap>
          {lastPosts.lostplaces.map((post: any) => (
            <Column xs={12} m={6} l={4}>
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
            <Link href="/tag/travel">
              <a>
                <h5>#travel</h5>
              </a>
            </Link>
          </Column>
          <Spacer size={3} sizeWhen={{ l: 4 }} vertical />
        </Row>
        <Row withVerticalGap>
          {lastPosts.travel.map((post: any) => (
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
      {/* <Unit>
        <Row>
          <Column xs={12}>
            <Divider />
          </Column>
        </Row>
      </Unit> */}
      {/* <Unit paddingTop>
        <Row>
          <Column xs={12}>
            <Link href="/tag/sideproject">
              <a>
                <h5>#sideproject</h5>
              </a>
            </Link>
          </Column>
          <Spacer size={5} vertical />
        </Row>
        <Row withVerticalGap>
          {lastPosts.sideprojects.map((post: any) => (
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
      </Unit> */}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </PageTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }

  const page = await fetchPage('home', config.apiKey)

  const allPages = await fetchPages(config.apiKey)

  const posts = allPages.filter(page => page.type === 'post')

  const lastLostplacePosts = posts
    .filter(post => post.tags?.includes('lostplace'))
    .splice(0, 6)
  const lastTravelPosts = posts
    .filter(post => post.tags?.includes('travel'))
    .splice(0, 2)
  const lastSideprojectPosts = posts
    .filter(post => post.tags?.includes('sideproject'))
    .splice(0, 2)

  return {
    props: {
      page,
      posts,
      lastPosts: {
        lostplaces: lastLostplacePosts,
        travel: lastTravelPosts,
        sideprojects: lastSideprojectPosts
      }
    }
  }
}

export default Frontpage
