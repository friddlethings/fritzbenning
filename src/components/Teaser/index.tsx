import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './styles.module.scss'

interface TeaserProps {
  title: string
  image: string
  to: string
  tags?: string[]
}

const Teaser: React.FC<TeaserProps> = ({ title, image, to, tags }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0
  })

  return (
    <Link href={to}>
      <a
        className={classNames(styles.teaser, inView && styles['in-view'])}
        key={title}
        ref={ref}
      >
        <div className={styles.inner}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.caption}>
          <h4 className={styles.title}>{title}</h4>
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
