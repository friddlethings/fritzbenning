import React from 'react'
import { Text, types } from 'react-bricks'
import './PageStage.scss'

interface PageStageProps {
  title: string
  text: string
}

const PageStage: types.Brick<PageStageProps> = () => {
  return (
    <div className="page-stage">
      <Text
        renderBlock={(props) => <h1>{props.children}</h1>}
        placeholder="Wie soll die Seite heißen?"
        propName="title"
      />
      <Text
        renderBlock={(props) => <h4>{props.children}</h4>}
        placeholder="Ein aussagekräftiger Einleitungstext"
        propName="text"
      />
    </div>
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
