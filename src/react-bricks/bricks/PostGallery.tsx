import React, { useEffect } from 'react'
import { types, useAdminContext, usePages, usePagesPublic } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import Teaser from '../../components/Teaser'
import './PostGallery.scss'

interface PostGalleryProps {
  tag: string
  category: string
}

const PostGallery: types.Brick<PostGalleryProps> = ({ tag, category }) => {
  const { isAdmin, previewMode } = useAdminContext()

  const FrontendView = () => {
    const { data } = usePagesPublic({
      type: 'post',
      tag: category,
      language: 'de',
    })

    useEffect(() => {
      console.log(data)
    }, [data])

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

    useEffect(() => {
      console.log(data)
      const test = (props) => console.log(props)
    }, [data])

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
    <Brick className="teaser-gallery" contrained displaced>
      <Row>{isAdmin ? <AdminView /> : <FrontendView />}</Row>
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
