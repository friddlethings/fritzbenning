import React from 'react'
import { Text, types } from 'react-bricks'

interface HeroUnitProps {
  title: string
}

const PageStage: types.Brick<HeroUnitProps> = () => {
  return (
    <div>
      <div>
        <Text
          renderBlock={(props) => <h1>{props.children}</h1>}
          placeholder="Wie soll die Seite heißen?"
          propName="title"
        />
      </div>
    </div>
  )
}

PageStage.schema = {
  name: 'page-stage',
  label: 'Seitenbühne',
  getDefaultProps: () => ({
    title: 'Seitentitel',
  }),
  sideEditProps: [],
}

export default PageStage
