import React from 'react'
import { RichText, Text, types, usePageValues } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Stage from '../../../components/Stage'
import Unit from '../../../components/Unit'

interface PageStageProps {
  title: string
  text: string
  subheadline: boolean
  meta: boolean
}

const StageBrick: types.Brick<PageStageProps> = ({ subheadline, meta }) => {
  const [page] = usePageValues()

  return (
    <Unit>
      <Row>
        <Column xs={12}>
          <Stage
            title={
              <Text
                renderBlock={({ children }) => <>{children}</>}
                placeholder="Wie soll die Seite heißen?"
                propName="title"
              />
            }
            subheadline={
              subheadline && (
                <RichText
                  renderBlock={({ children }) => <p>{children}</p>}
                  allowedFeatures={[types.RichTextFeatures.Highlight]}
                  placeholder="Ein aussagekräftiger Einleitungstext"
                  renderHighlight={({ children }) => (
                    <span className="highlighted">{children}</span>
                  )}
                  propName="text"
                />
              )
            }
            meta={meta && { publishedAt: page.publishedAt, tags: page.tags }}
          />
        </Column>
      </Row>
    </Unit>
  )
}

StageBrick.schema = {
  name: 'page-stage',
  label: 'Seitenbühne',
  getDefaultProps: () => ({
    title: 'Seitentitel',
    text: 'Einleitungstext'
  }),
  sideEditProps: [
    {
      name: 'meta',
      label: 'Metainformationen anzeigen',
      type: types.SideEditPropType.Boolean
    },
    {
      name: 'subheadline',
      label: 'Einleitungstext anzeigen',
      type: types.SideEditPropType.Boolean
    }
  ]
}

export default StageBrick
