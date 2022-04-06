import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { fetchPages, fetchTags, types } from 'react-bricks/frontend'
import ErrorNoHomePage from '../../components/ErrorNoHomePage'
import Column from '../../components/Grid/Column'
import Row from '../../components/Grid/Row'
import PageTemplate from '../../components/PageTemplate'
import Seo from '../../components/Seo'
import Stage from '../../components/Stage'
import Teaser from '../../components/Teaser'
import Unit from '../../components/Unit'
import config from '../../react-bricks/config'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

interface PageProps {
  page: types.Page
  posts: types.Page[]
  error: string
  filterTag: string
}

const TagPage: React.FC<PageProps> = ({ filterTag, posts, error }) => {
  return (
    <PageTemplate>
      <Seo title={filterTag} description={filterTag} lang="de" />
      <Stage title={`#${capitalizeFirstLetter(filterTag)}`} />
      <Unit paddingTop>
        <Row withVerticalGap>
          {posts.map((post: any) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.meta.title}
                date={post.publishedAt}
                image={post.meta.featuredImage}
                tags={post.tags}
                to={`/blog/${post.slug}`}
              />
            </Column>
          ))}
        </Row>
      </Unit>
      {error === 'NOKEYS' && <ErrorNoHomePage />}
    </PageTemplate>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }

  const { tagSlug } = params

  const allPages = await fetchPages(config.apiKey, {
    pageSize: 1000,
    sort: '-publishedAt'
  })

  const posts = allPages.filter(page => page.type === 'post')

  const postsByTag = posts.filter(post =>
    post.tags?.includes(tagSlug.toString())
  )

  return { props: { posts: postsByTag, filterTag: tagSlug } }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  if (!config.apiKey) {
    return { paths: [], fallback: false }
  }

  const { items: tags } = await fetchTags(config.apiKey)
  tags.sort()

  const paths = tags
    .map(tag => ({
      params: { tagSlug: tag },
      locale: 'de'
    }))
    .flat()

  return { paths, fallback: false }
}

export default TagPage
