import React from 'react'
import { types, useAdminContext, usePages, usePagesPublic } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import Teaser from '../../components/Teaser'
import './PostGallery.scss'

interface PostGalleryProps {
  category: string
}

const PostGallery: types.Brick<PostGalleryProps> = ({ category }) => {
  const { isAdmin, previewMode } = useAdminContext()

  const PublicView = () => {
    const { data } = usePagesPublic({
      type: 'post',
      tag: category,
      language: 'de',
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
    const { data } = usePages({ type: 'post', tag: category, language: 'de' })

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
    tag: null,
    category: '',
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
  ],
}

export default PostGallery
