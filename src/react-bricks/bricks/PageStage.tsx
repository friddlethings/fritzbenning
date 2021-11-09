import React from 'react'
import { Text, types } from 'react-bricks'
import Brick from '../../components/Brick'
import Column from '../../components/grid/column'
import Row from '../../components/grid/row'
import './PageStage.scss'

interface PageStageProps {
  title: string
  text: string
}

const PageStage: types.Brick<PageStageProps> = () => {
  return (
    <Brick className="page-stage" contrained displaced>
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
            <Text
              renderBlock={(props) => (
                <h2 className="page-stage__text">{props.children}</h2>
              )}
              placeholder="Ein aussagekräftiger Einleitungstext"
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
