import classNames from 'classnames'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { dateDiffInDays } from '../../utils/dateDiffInDays'
import Badge from '../Badge'
import styles from './styles.module.scss'

interface TeaserProps {
  id?: string
  title: string
  date: string
  image: string
  to: string
  tags?: string[]
}

const Teaser: React.FC<TeaserProps> = ({
  id,
  title,
  date,
  image,
  to,
  tags
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0
  })

  let diffDays = useRef(0)

  const getPostLifetime = publishedAt => {
    const now = new Date(Date.now())
    const published = new Date(publishedAt)

    const newDiffDays = dateDiffInDays(published, now)
    diffDays.current = newDiffDays
  }

  return (
    <Link href={to}>
      <a
        className={classNames(styles.teaser, inView && styles['in-view'])}
        key={title}
        ref={ref}
      >
        <div className={styles.inner} id={id}>
          {diffDays.current < 30 && <Badge text="neu" />}
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.caption}>
          <h4 className={styles.title}>
            {title}
            {getPostLifetime(date)}
          </h4>
          {tags && (
            <ul className={styles.tags}>
              {tags.map(tag => (
                <li className={styles.tag}>#{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </Link>
  )
}

export default Teaser
