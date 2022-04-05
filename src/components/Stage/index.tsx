import classNames from 'classnames'
import React from 'react'
import Meta from '../Meta'
import styles from './styles.module.scss'

interface StageProps {
  title: JSX.Element
  subheadline?: JSX.Element
  meta?: { publishedAt?: string; tags?: string[] }
}

const Stage: React.FC<StageProps> = ({ title, subheadline, meta }) => {
  return (
    <div className={styles.stage}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {meta && <Meta publishedAt={meta.publishedAt} tags={meta.tags} />}
        {subheadline && (
          <div
            className={classNames(
              styles.text,
              meta && styles['with-padding-top']
            )}
          >
            {subheadline}
          </div>
        )}
      </div>
    </div>
  )
}

export default Stage
