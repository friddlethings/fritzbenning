import React from 'react'
import { types, usePagesPublic } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
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
  const { data } = usePagesPublic({
    type: 'post',
    tag: category,
    language: 'de',
    usePagination: pagination,
    page: 1,
    pageSize: pageSize,
  })

  return (
    <Unit className="teaser-gallery" paddingTop>
      <Row withVerticalGap>
        {data &&
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
      </Row>
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
