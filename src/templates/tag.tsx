import React from 'react'
import { types } from 'react-bricks/frontend'
import ErrorNoHomePage from '../components/ErrorNoHomePage'
import Column from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import PageTemplate from '../components/PageTemplate'
import Seo from '../components/Seo'
import Stage from '../components/Stage'
import Teaser from '../components/Teaser'
import Unit from '../components/Unit'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

interface PageProps {
  pageContext: {
    posts: types.Page[]
    error: string
    filterTag: string
    tags: string[]
  }
}

const TagPage: React.FC<PageProps> = ({
  pageContext: { filterTag, posts, tags, error },
}) => {
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

export default TagPage
