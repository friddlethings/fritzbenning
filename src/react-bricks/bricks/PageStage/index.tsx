import cx from 'classnames'
import React, { useEffect } from 'react'
import { RichText, Text, types, usePageValues } from 'react-bricks'
import Meta from '../../../components/Meta'
import Unit from '../../../components/Unit'
import Column from '../../../components/_grid/column'
import Row from '../../../components/_grid/Row'
import { randomIntFromInterval } from '../../../utils'
import './styles.scss'

interface PageStageProps {
  title: string
  text: string
  subheadline: boolean
  meta: boolean
}

const PageStage: types.Brick<PageStageProps> = ({ subheadline, meta }) => {
  const [page] = usePageValues()

  useEffect(() => {
    console.log(page)
  }, [page])

  return (
    <Unit className="page-stage">
      <Row>
        <Column xs={12}>
          <div className="page-stage__inner">
            <Text
              renderBlock={(props) => (
                <h1 className="page-stage__title">{props.children}</h1>
              )}
              placeholder="Wie soll die Seite heißen?"
              propName="title"
            />
            {meta && <Meta publishedAt={page.publishedAt} tags={page.tags} />}
            {subheadline && (
              <RichText
                renderBlock={(props) => (
                  <p
                    className={cx({
                      'page-stage__text': true,
                      'page-stage__text--withPaddingTop': meta,
                    })}
                  >
                    {props.children}
                  </p>
                )}
                allowedFeatures={[types.RichTextFeatures.Highlight]}
                placeholder="Ein aussagekräftiger Einleitungstext"
                renderHighlight={(props) => (
                  <span
                    className="is-highlighted"
                    style={{
                      ['--random' as any]: `${randomIntFromInterval(-1, 1)}deg`,
                    }}
                  >
                    {props.children}
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
    text: 'Einleitungstext',
  }),
  sideEditProps: [
    {
      name: 'meta',
      label: 'Metainformationen anzeigen',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'subheadline',
      label: 'Einleitungstext anzeigen',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default PageStage
