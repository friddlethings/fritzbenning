import React, { useState } from 'react'
import { types, usePagesPublic } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Pagination from '../../../components/Pagination'
import Teaser from '../../../components/Teaser'
import Unit from '../../../components/Unit'
import './styles.scss'

interface PostGalleryProps {
  category: string
  pageSize: number
  pagination: boolean
}

const PostGallery: types.Brick<PostGalleryProps> = ({
  category,
  pagination,
  pageSize,
}) => {
  const [page, setPage] = useState(1)
  const { data } = usePagesPublic({
    type: 'post',
    tag: category,
    language: 'de',
    usePagination: pagination,
    page: page,
    pageSize: pageSize,
  })

  const changePage = (newPage: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setPage(newPage)
  }

  return (
    <Unit className="teaser-gallery" paddingTop>
      <Row withVerticalGap>
        {Array.isArray(data) &&
          data.map((post) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.name}
                image={post.meta.featuredImage}
                tags={post.tags}
                to={`/${post.slug}`}
              />
            </Column>
          ))}
        {Array.isArray(data?.items) &&
          data.items.map((post) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.name}
                image={post.meta.featuredImage}
                tags={post.tags}
                to={`/${post.slug}`}
              />
            </Column>
          ))}
      </Row>
      {data && pagination && (
        <Pagination
          total={data.pagination.totalPages}
          currentPage={page}
          changePage={changePage}
        />
      )}
    </Unit>
  )
}

PostGallery.schema = {
  name: 'post-gallery',
  label: 'Beitragsgalerie',
  getDefaultProps: () => ({
    category: '',
    pageSize: 8,
    pagination: false,
  }),
  sideEditProps: [
    {
      name: 'category',
      label: 'Kategorie',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '', label: 'Alle Kategorien' },
          { value: 'fotografie', label: 'Fotografie' },
          { value: 'sideproject', label: 'Sideprojects' },
        ],
      },
    },
    {
      name: 'pagination',
      label: 'Pagniation',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'pageSize',
      label: 'Maximale Anzahl pro Seite',
      type: types.SideEditPropType.Number,
    },
  ],
}

export default PostGallery
