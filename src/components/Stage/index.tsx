import classNames from 'classnames'
import React from 'react'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Meta from '../Meta'
import Unit from '../Unit'
import styles from './styles.module.scss'

interface StageProps {
  title: string
  subheadline?: boolean
  publishedAt?: string
  tags?: string[]
}

const Stage: React.FC<StageProps> = ({
  title,
  subheadline,
  publishedAt,
  tags
}) => {
  return (
    <Unit className={styles.stage}>
      <Row>
        <Column xs={12}>
          <div className={styles.inner}>
            <h1 className={styles.title}>{title}</h1>
            {publishedAt ||
              (tags && <Meta publishedAt={publishedAt} tags={tags} />)}
            {subheadline && (
              <p
                className={classNames(
                  styles.text,
                  publishedAt || (tags && styles['with-padding-top'])
                )}
              >
                {subheadline}
              </p>
            )}
          </div>
        </Column>
      </Row>
    </Unit>
  )
}

export default Stage
