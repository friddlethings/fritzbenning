import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import HeroTextTile from '../../../components/HeroTextTile'
import Unit from '../../../components/Unit'

const HeroTextTileBrick: types.Brick = () => {
  return (
    <Unit>
      <Row>
        <Column xs={12}>
          <HeroTextTile>
            <RichText
              renderBlock={({ children }) => (
                <>
                  <span>{children}</span>
                  <br />
                </>
              )}
              placeholder="Schreibe einen Text ..."
              propName="text"
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Link,
                types.RichTextFeatures.Heading2,
                types.RichTextFeatures.Heading3,
                types.RichTextFeatures.Heading4
              ]}
            />
          </HeroTextTile>
        </Column>
      </Row>
    </Unit>
  )
}

HeroTextTileBrick.schema = {
  name: 'hero-text-tile',
  label: 'Info Kachel',
  getDefaultProps: () => ({})
}

export default HeroTextTileBrick
