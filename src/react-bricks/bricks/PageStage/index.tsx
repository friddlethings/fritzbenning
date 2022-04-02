import classNames from 'classnames'
import React from 'react'
import { RichText, Text, types, usePageValues } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Meta from '../../../components/Meta'
import Unit from '../../../components/Unit'
import { randomIntFromInterval } from '../../../utils/randomIntFromInterval'
import styles from './styles.module.scss'

interface PageStageProps {
  title: string
  text: string
  subheadline: boolean
  meta: boolean
}

const PageStage: types.Brick<PageStageProps> = ({ subheadline, meta }) => {
  const [page] = usePageValues()

  return (
    <Unit className={styles.stage}>
      <Row>
        <Column xs={12}>
          <div className={styles.inner}>
            <Text
              renderBlock={props => (
                <h1 className={styles.title}>{props.children}</h1>
              )}
              placeholder="Wie soll die Seite heißen?"
              propName="title"
            />
            {meta && <Meta publishedAt={page.publishedAt} tags={page.tags} />}
            {subheadline && (
              <RichText
                renderBlock={({ children }) => (
                  <p
                    className={classNames(
                      styles.text,
                      meta && styles['with-padding-top']
                    )}
                  >
                    {children}
                  </p>
                )}
                allowedFeatures={[types.RichTextFeatures.Highlight]}
                placeholder="Ein aussagekräftiger Einleitungstext"
                renderHighlight={({ children }) => (
                  <span
                    className={styles.highlighted}
                    style={{
                      ['--random' as any]: `${randomIntFromInterval(-1, 1)}deg`
                    }}
                  >
                    {children}
                  </span>
                )}
                propName="text"
              />
            )}
          </div>
        </Column>
      </Row>
    </Unit>
  )
}

PageStage.schema = {
  name: 'page-stage',
  label: 'Seitenbühne',
  getDefaultProps: () => ({
    title: 'Seitentitel',
    text: 'Einleitungstext'
  }),
  sideEditProps: [
    {
      name: 'meta',
      label: 'Metainformationen anzeigen',
      type: types.SideEditPropType.Boolean
    },
    {
      name: 'subheadline',
      label: 'Einleitungstext anzeigen',
      type: types.SideEditPropType.Boolean
    }
  ]
}

export default PageStage
