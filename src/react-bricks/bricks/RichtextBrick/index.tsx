import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Richtext from '../../../components/Richtext'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps
} from '../../sideProps/LayoutProps'

interface RichtextProps extends LayoutInterface {
  text: string
}

const RichtextBrick: types.Brick<RichtextProps> = ({
  width,
  paddingTop,
  paddingBottom
}) => {
  return (
    <Unit width={width} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <Row>
        <Column xs={12}>
          <Richtext>
            <RichText
              renderBlock={({ children }) => <p>{children}</p>}
              placeholder="Schreibe einen Text ..."
              propName="text"
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Highlight,
                types.RichTextFeatures.Code,
                types.RichTextFeatures.Link,
                types.RichTextFeatures.Heading3,
                types.RichTextFeatures.Heading4
              ]}
              renderHighlight={({ children }) => (
                <span className="highlight">{children}</span>
              )}
              renderCode={({ children }) => <code>{children}</code>}
            />
          </Richtext>
        </Column>
      </Row>
    </Unit>
  )
}

RichtextBrick.schema = {
  name: 'richtext',
  label: 'Fließtext',
  getDefaultProps: () => ({
    text: 'Ich bin ein Fließtext.',
    ...LayoutDefaultProps
  }),
  sideEditProps: [LayoutProps]
}

export default RichtextBrick
