import React from 'react'
import { types, useAdminContext, usePages, usePagesPublic } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Teaser from '../../components/Teaser'
import './PostGallery.scss'

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
  const { isAdmin, previewMode } = useAdminContext()

  const PublicView = () => {
    const { data } = usePagesPublic({
      type: 'post',
      tag: category,
      language: 'de',
      usePagination: pagination,
      page: 1,
      pageSize: pageSize,
    })

    return (
      <>
        {data &&
          data.map((post) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.name}
                image={post.meta.featuredImage}
                tags={post.tags}
              />
            </Column>
          ))}
      </>
    )
  }

  const AdminView = () => {
    const { data } = usePages({
      type: 'post',
      tag: category,
      language: 'de',
      usePagination: pagination,
      page: 1,
      pageSize: pageSize,
    })

    return (
      <>
        {data &&
          data.map((post) => (
            <Column xs={12} m={6}>
              <Teaser
                title={post.name}
                image={post.meta.featuredImage}
                tags={post.tags}
              />
            </Column>
          ))}
      </>
    )
  }

  return (
    <Brick className="teaser-gallery" paddingTop>
      <Row withVerticalGap>{isAdmin ? <AdminView /> : <PublicView />}</Row>
    </Brick>
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
