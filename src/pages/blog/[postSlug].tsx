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
import PageTemplate from '../../components/PageTemplate'
import Seo from '../../components/Seo'
import config from '../../react-bricks/config'

interface ReactBricksPageProps {
  page: types.Page
  error: string
}

const Page: React.FC<ReactBricksPageProps> = ({ page, error }) => {
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

  const { postSlug } = params

  try {
    const page = await fetchPage(postSlug.toString(), config.apiKey, locale)
    return { props: { page } }
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
    .filter(page => page.type === 'post')
    .map(page =>
      page.translations
        .filter(translation => locales.indexOf(translation.language) > -1)
        .map(translation => ({
          params: { postSlug: translation.slug },
          locale: translation.language
        }))
    )
    .flat()

  return { paths, fallback: false }
}

export default Page
