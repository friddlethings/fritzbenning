import { types } from 'react-bricks/frontend'

export interface LayoutInterface {
  width: 'full' | 'default' | 'content'
  paddingTop: boolean
  paddingBottom: boolean
}

export const LayoutProps = {
  groupName: 'Layout',
  defaultOpen: true,
  props: [
    {
      name: 'paddingTop',
      label: 'Abstand nach oben',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'paddingBottom',
      label: 'Abstand nach unten',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'width',
      label: 'Breite',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'default', label: 'Standardbreite' },
          { value: 'full', label: 'Volle Breite' },
          { value: 'content', label: 'Inhaltsbreite' },
        ],
      },
    },
  ],
}

export const LayoutDefaultProps = {
  paddingTop: true,
  paddingBottom: true,
  width: 'default',
}
