import React from 'react'
import { Link } from 'react-bricks/frontend'
import './styles.scss'

interface MetaProps {
  tags: string[]
  publishedAt: string
}

const Meta: React.FC<MetaProps> = ({ tags, publishedAt }) => (
  <div className="meta">
    <span className="meta__publishedAt">
      Veröffentlicht am{' '}
      <strong>{new Date(publishedAt).toLocaleDateString('de-DE')}</strong>{' '}
    </span>
    &middot;
    <ul className="meta__tags">
      {tags.map((tag) => (
        <li>
          <Link href={`/${tag}`}>{`#${tag}`}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Meta
