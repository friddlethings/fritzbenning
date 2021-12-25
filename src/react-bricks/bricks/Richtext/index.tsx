import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from '../../sideProps/LayoutProps'
import './styles.scss'

interface RichtextProps extends LayoutInterface {
  text: string
}

const Richtext: types.Brick<RichtextProps> = ({
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
