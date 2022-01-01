import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'de',
    getDefaultContent: () => ['page-stage'],
  },
  {
    name: 'doorpage',
    pluralName: 'doorpages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'de',
    customFields: [
      {
        groupName: 'Doorpage',
        defaultOpen: true,
        props: [
          {
            name: 'tag',
            label: 'Tag',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'fotografie', label: 'fotografie' },
                { value: 'sideproject', label: 'sideproject' },
              ],
            },
          },
        ],
      },
    ],
    getDefaultContent: () => ['page-stage'],
  },
  {
    name: 'post',
    pluralName: 'posts',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'de',
    getDefaultContent: () => ['page-stage'],
  },
]

export default pageTypes
