import { types } from 'react-bricks'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'en',
    getDefaultContent: () => [],
  },
]

export default pageTypes