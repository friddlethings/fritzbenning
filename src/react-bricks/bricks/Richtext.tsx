import React from 'react'
import { RichText, types } from 'react-bricks'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import Unit from '../../components/Unit'
import './Richtext.scss'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from './sideProps/LayoutProps'

interface HeroUnitProps extends LayoutInterface {
  text: string
}

const Richtext: types.Brick<HeroUnitProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Unit
      className="richtext"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <RichText
            renderBlock={(props) => <p>{props.children}</p>}
            placeholder="Schreibe einen Text ..."
            propName="text"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Code,
              types.RichTextFeatures.Link,
              types.RichTextFeatures.Heading3,
              types.RichTextFeatures.Heading4,
            ]}
            renderHighlight={(props) => (
              <span className="is-highlighted">{props.children}</span>
            )}
            renderCode={(props) => (
              <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
                {props.children}
              </code>
            )}
          />
        </Column>
      </Row>
    </Unit>
  )
}

Richtext.schema = {
  name: 'richtext',
  label: 'Fließtext',
  getDefaultProps: () => ({
    text: 'Ich bin ein Fließtext.',
    ...LayoutDefaultProps,
  }),
  sideEditProps: [LayoutProps],
}

export default Richtext
