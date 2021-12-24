import { navigate } from 'gatsby'
import { types } from 'react-bricks/frontend'
import bricks from './bricks'
import GatsbyLink from './GatsbyLink'
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
  renderLocalLink: GatsbyLink,
  navigate,
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#___gatsby',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
}

export default config
