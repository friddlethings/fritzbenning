import React from 'react'
import { Link } from 'react-bricks'
import './Teaser.scss'

interface TeaserProps {
  title: string
  image: string
  tags: string[]
}

const Teaser: React.FC<TeaserProps> = ({ title, tags, image }) => {
  return (
    <div className="teaser">
      <Link href="/">
        <div className="teaser__inner">
          <img src={image} alt={title} className="teaser__inner__image" />
        </div>
        <div className="teaser__caption">
          <h5 className="teaser__title">{title}</h5>
          {tags && (
            <ul className="teaser__tags">
              {tags.map((tag) => (
                <li className="teaser__tags__item">#{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </div>
  )
}

export default Teaser
