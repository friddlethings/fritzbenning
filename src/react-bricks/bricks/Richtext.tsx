import React from 'react'
import { RichText, types } from 'react-bricks'

interface HeroUnitProps {
  text: string
}

const Richtext: types.Brick<HeroUnitProps> = () => {
  return (
    <div>
      <div className="flex flex-col">
        <RichText
          renderBlock={(props) => (
            <p className="text-xl text-gray-700 dark:text-gray-100">
              {props.children}
            </p>
          )}
          placeholder="Schreibe einen Text ..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
          ]}
          renderCode={(props) => (
            <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
              {props.children}
            </code>
          )}
        />
      </div>
    </div>
  )
}

Richtext.schema = {
  name: 'richtext',
  label: 'Fließtext',
  getDefaultProps: () => ({
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [],
}

export default Richtext
