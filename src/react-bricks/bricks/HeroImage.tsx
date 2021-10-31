import React from 'react'
import { Image, Text, types } from 'react-bricks'
import './HeroImage.scss'

interface HeroImageProps {
  image: string
  title: string
}

const HeroImage: types.Brick<HeroImageProps> = () => {
  return (
    <div className="hero-image">
      <Image
        propName="image"
        alt="Icon"
        imageClassName="hero-image__inner"
        maxWidth={2024}
      />
      <Text
        renderBlock={(props) => (
          <caption className="hero-image__caption">{props.children}</caption>
        )}
        placeholder="Optionaler Titel des Bildes"
        propName="title"
      />
    </div>
  )
}

HeroImage.schema = {
  name: 'hero-image',
  label: 'Hero Bild',
  getDefaultProps: () => ({
    image: 'Seitentitel',
    title: 'Bildtitle',
  }),
  sideEditProps: [],
}

export default HeroImage