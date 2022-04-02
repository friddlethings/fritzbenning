import React, { useRef, useState } from 'react'
import { types, usedataPublic } from 'react-bricks/frontend'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Pagination from '../../../components/Pagination'
import Teaser from '../../../components/Teaser'
import Unit from '../../../components/Unit'

interface PostGalleryProps {
  category: string
  dataize: number
  pagination: boolean
}

const PostGallery: types.Brick<PostGalleryProps> = ({
  category,
  pagination,
  dataize
}) => {
  const galleryRef = useRef(null)

  const [page, setPage] = useState(1)

  const { data } = usedataPublic({
    type: 'post',
    tag: category,
    usePagination: pagination,
    page: page,
    dataize: dataize,
    sort: '-createdAt'
  })

  const changePage = (newPage: number) => {
    window.scrollTo({
      top: galleryRef.current.offsetTop - 80,
      behavior: 'smooth'
    })
    setPage(newPage)
  }

  return (
    <Unit paddingTop>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={`page-${page}`}
          addEndListener={(node: any, done: boolean) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames="fade"
        >
          <>
            {data && (
              <div ref={galleryRef}>
                <Row withVerticalGap>
                  {Array.isArray(data) &&
                    data.map((post: any) => (
                      <Column xs={12} m={6}>
                        <Teaser
                          title={post.meta.title}
                          image={post.meta.featuredImage}
                          tags={post.tags}
                          to={`/blog/${post.slug}`}
                        />
                      </Column>
                    ))}
                  {Array.isArray(data.items) &&
                    data.items.map((post: any) => (
                      <Column xs={12} m={6}>
                        <Teaser
                          title={post.meta.title}
                          image={post.meta.featuredImage}
                          tags={post.tags}
                          to={`/${post.slug}`}
                        />
                      </Column>
                    ))}
                </Row>

                {pagination && (
                  <Pagination
                    total={data.pagination.totaldata}
                    currentPage={page}
                    changePage={changePage}
                  />
                )}
              </div>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </Unit>
  )
}

PostGallery.schema = {
  name: 'post-gallery',
  label: 'Beitragsgalerie',
  getDefaultProps: () => ({
    category: '',
    dataize: 8,
    pagination: false
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
          { value: 'sideproject', label: 'Sideprojects' }
        ]
      }
    },
    {
      name: 'pagination',
      label: 'Pagniation',
      type: types.SideEditPropType.Boolean
    },
    {
      name: 'dataize',
      label: 'Maximale Anzahl pro Seite',
      type: types.SideEditPropType.Number
    }
  ]
}

export default PostGallery
