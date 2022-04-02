import Link from 'next/link'
import React from 'react'
import OnlyDesktop from '../Media/OnlyDesktop'
import styles from './styles.module.scss'

interface MetaProps {
  tags: string[]
  publishedAt: string
}

const Meta: React.FC<MetaProps> = ({ tags, publishedAt }) => (
  <div className={styles.meta}>
    <span className={styles.published}>
      Veröffentlicht am{' '}
      <strong>{new Date(publishedAt).toLocaleDateString('de-DE')}</strong>
    </span>
    {tags.length > 0 && <OnlyDesktop>&middot;</OnlyDesktop>}
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li>
          <Link href={`/tag/${tag}`}>
            <a>{`#${tag}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Meta
