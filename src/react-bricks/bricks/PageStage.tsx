import React from 'react'
import { RichText, Text, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/Column'
import Row from '../../components/grid/Row'
import { randomIntFromInterval } from '../../utils'
import './PageStage.scss'

interface PageStageProps {
  title: string
  text: string
}

const PageStage: types.Brick<PageStageProps> = () => {
  return (
    <Brick className="page-stage" displaced>
      <Row>
        <Column xs={12}>
          <div className="page-stage__inner">
            <Text
              renderBlock={(props) => (
                <h1 className="page-stage__title">{props.children}</h1>
              )}
              placeholder="Wie soll die Seite heißen?"
              propName="title"
            />
            <RichText
              renderBlock={(props) => (
                <h2 className="page-stage__text">{props.children}</h2>
              )}
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              placeholder="Ein aussagekräftiger Einleitungstext"
              renderHighlight={(props) => (
                <span
                  className="is-highlighted"
                  style={{
                    ['--random' as any]: `${randomIntFromInterval(-1, 1)}deg`,
                  }}
                >
                  {props.children}
                </span>
              )}
              propName="text"
            />
          </div>
        </Column>
      </Row>
    </Brick>
  )
}

PageStage.schema = {
  name: 'page-stage',
  label: 'Seitenbühne',
  getDefaultProps: () => ({
    title: 'Seitentitel',
    text: 'Einleitungstext',
  }),
  sideEditProps: [],
}

export default PageStage
