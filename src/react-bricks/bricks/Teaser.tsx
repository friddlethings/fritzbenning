import React from 'react'
import { Image, Link, Text, types } from 'react-bricks'
import './Teaser.scss'

interface TeaserProps {
  image: string
  title: string
  description: string
}

const Teaser: types.Brick<TeaserProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="teaser">
      <Link href="/">
        <div className="teaser__inner">
          <Image
            propName="image"
            alt="Icon"
            imageClassName="teaser__inner__image"
            maxWidth={2048}
          />
        </div>
        <div className="teaser__caption">
          <Text
            renderBlock={(props) => (
              <h5 className="teaser__title">{props.children}</h5>
            )}
            placeholder="Teaser Titel"
            propName="title"
          />
          <Text
            renderBlock={(props) => (
              <p className="teaser__description">{props.children}</p>
            )}
            placeholder="Beschreibung"
            propName="description"
          />
        </div>
      </Link>
    </div>
  )
}

Teaser.schema = {
  name: 'teaser',
  label: 'Teaser',
  getDefaultProps: () => ({
    title: 'Titel',
    description: 'Beschreibung',
  }),
}

export default Teaser
