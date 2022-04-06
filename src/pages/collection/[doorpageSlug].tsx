import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useContext } from 'react'
import {
  cleanPage,
  fetchPage,
  fetchPages,
  PageViewer,
  ReactBricksContext,
  types
} from 'react-bricks/frontend'
import ErrorNoHomePage from '../../components/ErrorNoHomePage'
import ErrorNoKeys from '../../components/ErrorNoKeys'
import Column from '../../components/Grid/Column'
import Row from '../../components/Grid/Row'
import PageTemplate from '../../components/PageTemplate'
import Seo from '../../components/Seo'
import Teaser from '../../components/Teaser'
import Unit from '../../components/Unit'
import config from '../../react-bricks/config'

interface ReactBricksPageProps {
  page: types.Page
  posts: types.Page[]
  error: string
}

const Page: React.FC<ReactBricksPageProps> = ({ page, posts, error }) => {
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

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }

  const { doorpageSlug } = params

  const allPages = await fetchPages(config.apiKey, {
    pageSize: 1000,
    sort: '-publishedAt'
  })

  const posts = allPages.filter(page => page.type === 'post')

  try {
    const page = await fetchPage(doorpageSlug.toString(), config.apiKey, locale)

    const postsByTag = posts.filter(post =>
      post.tags?.includes(page.customValues.tag)
    )

    return { props: { page, posts: postsByTag } }
  } catch {
    return { props: { error: 'NOPAGE' } }
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  if (!config.apiKey) {
    console.log('error')
    return { paths: [], fallback: false }
  }

  const allPages = await fetchPages(config.apiKey)

  const paths = allPages
    .filter(page => page.type === 'doorpage')
    .map(page =>
      page.translations
        .filter(translation => locales.indexOf(translation.language) > -1)
        .map(translation => ({
          params: { doorpageSlug: translation.slug },
          locale: translation.language
        }))
    )
    .flat()

  return { paths, fallback: false }
}

export default Page
