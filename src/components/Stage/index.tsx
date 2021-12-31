import cx from 'classnames'
import React from 'react'
import Column from '../Grid/Column'
import Row from '../Grid/Row'
import Meta from '../Meta'
import Unit from '../Unit'
import './styles.scss'

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
  tags,
}) => {
  return (
    <Unit className="page-stage">
      <Row>
        <Column xs={12}>
          <div className="page-stage__inner">
            <h1 className="page-stage__title">{title}</h1>
            {publishedAt ||
              (tags && <Meta publishedAt={publishedAt} tags={tags} />)}
            {subheadline && (
              <p
                className={cx({
                  'page-stage__text': true,
                  'page-stage__text--withPaddingTop': publishedAt || tags,
                })}
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
