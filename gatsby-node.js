require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetchPages = require('react-bricks/frontend').fetchPages
const fetchPage = require('react-bricks/frontend').fetchPage
const fetchTags = require('react-bricks/frontend').fetchTags

exports.createPages = async ({ actions: { createPage } }) => {
  const appId = process.env.GATSBY_APP_ID
  const apiKey = process.env.API_KEY

  if (!appId || !apiKey) {
    console.error(
      'App credentials not found. Please, set your GATSBY_APP_ID and API_KEY in your .env.development or .env.production file.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page: null, error: 'NOKEYS' },
    })
    return
  }

  const { items: tags } = await fetchTags(apiKey)
  tags.sort()

  const allPages = await fetchPages(apiKey, {
    pageSize: 1000,
    sort: '-publishedAt',
  })

  if (!allPages || allPages.length === 0) {
    console.error(
      'No published page was found. Please, create at least one page from the /admin interface.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/index.tsx'),
      context: { page: null, error: 'NOPAGE' },
    })
    return
  }

  const pages = allPages.filter(
    (page) => page.type === 'page' && page.slug !== 'home'
  )
  const doorpages = allPages.filter((page) => page.type === 'doorpage')
  const posts = allPages.filter((page) => page.type === 'post')

  const homepage = await fetchPage('home', apiKey)

  const lastLostplacePosts = posts
    .filter((post) => post.tags?.includes('lostplace'))
    .splice(0, 6)
  const lastTravelPosts = posts
    .filter((post) => post.tags?.includes('travel'))
    .splice(0, 2)
  const lastSideprojectPosts = posts
    .filter((post) => post.tags?.includes('sideproject'))
    .splice(0, 2)

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/frontpage.tsx'),
    context: {
      page: homepage,
      posts: posts,
      lastLostplacePosts,
      lastTravelPosts,
      lastSideprojectPosts,
      tags,
    },
  })

  for (const { slug } of pages) {
    const page = await fetchPage(slug, apiKey)
    createPage({
      path: `/${page.slug}/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page },
    })
  }

  for (const { slug } of doorpages) {
    const page = await fetchPage(slug, apiKey)

    const postsByTag = posts.filter((post) =>
      post.tags?.includes(page.customValues.tag)
    )

    createPage({
      path: `/${page.slug}/`,
      component: require.resolve('./src/templates/doorpage.tsx'),
      context: { page, posts: postsByTag, tags },
    })
  }

  for (const { slug } of posts) {
    const page = await fetchPage(slug, apiKey)
    createPage({
      path: `/blog/${page.slug}/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: { page },
    })
  }

  tags.forEach((tag) => {
    const postsByTag = posts.filter((post) => post.tags?.includes(tag))
    createPage({
      path: `/tag/${tag}`,
      component: require.resolve('./src/templates/tag.tsx'),
      context: { posts: postsByTag, filterTag: tag, tags },
    })
  })
}
