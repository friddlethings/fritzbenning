import React, { useEffect, useRef, useState } from 'react'
import { types, usePagesPublic } from 'react-bricks/frontend'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Pagination from '../../../components/Pagination'
import Teaser from '../../../components/Teaser'
import Unit from '../../../components/Unit'

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
  const galleryRef = useRef(null)

  const [page, setPage] = useState(1)

  const { data: pages } = usePagesPublic({
    type: 'post',
    tag: category,
    usePagination: pagination,
    page: page,
    pageSize: pageSize,
    sort: '-createdAt',
  })

  useEffect(() => {
    console.log
  }, [])

  const changePage = (newPage: number) => {
    window.scrollTo({
      top: galleryRef.current.offsetTop - 80,
      behavior: 'smooth',
    })
    setPage(newPage)
  }

  return (
    <Unit className="teaser-gallery" paddingTop>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={`page-${page}`}
          addEndListener={(node: any, done: boolean) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames="fade"
        >
          <>
            {pages && (
              <div ref={galleryRef}>
                <Row withVerticalGap>
                  {Array.isArray(pages) &&
                    pages.map((post: any) => (
                      <Column xs={12} m={6}>
                        <Teaser
                          title={post.meta.title}
                          image={post.meta.featuredImage}
                          tags={post.tags}
                          to={`/blog/${post.slug}`}
                        />
                      </Column>
                    ))}
                  {Array.isArray(pages.items) &&
                    pages.items.map((post: any) => (
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
                    total={pages.pagination.totalPages}
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
