import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps,
} from '../../sideProps/LayoutProps'
import './styles.scss'

interface PostFooterProps extends LayoutInterface {
  text: string
  label: string
}

const PostFooter: types.Brick<PostFooterProps> = ({
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Unit
      className="post-footer"
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row>
        <Column xs={12}>
          <div className="post-footer__inner">
            <Text
              placeholder="Label"
              propName="label"
              renderBlock={({ children }) => (
                <div className="post-footer__label">{children}</div>
              )}
            />
            <Text
              placeholder="Schreib hier einen Text ..."
              propName="text"
              renderBlock={({ children }) => <p>{children}</p>}
            />
            <div className="post-footer__action">
              <a href="mailto:mail@fritzbenning.de">Mail schreiben &rarr;</a>
            </div>
          </div>
        </Column>
      </Row>
    </Unit>
  )
}

PostFooter.schema = {
  name: 'post-footer',
  label: 'Abbinder',
  getDefaultProps: () => ({
    label: 'Info',
    text: 'Du möchtest mehr über diesen verlassenen Ort erfahren? Dann schreib mir gerne eine persönliche Nachricht!',
    ...LayoutDefaultProps,
  }),
  sideEditProps: [LayoutProps],
}

export default PostFooter
