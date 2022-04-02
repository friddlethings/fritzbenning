import Router from 'next/router'
import { types } from 'react-bricks/frontend'
import bricks from './bricks'
import NextLink from './NextLink'
import pageTypes from './pageTypes'

const config: types.ReactBricksConfig = {
  appId: process.env.GATSBY_APP_ID,
  apiKey: process.env.API_KEY,
  pageTypes,
  bricks,
  logo: '/ux-tollerei-logo.svg',
  //contentClassName: 'content',
  // isDarkColorMode: ...,
  // toggleColorMode: ...,
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true
}

export default config
