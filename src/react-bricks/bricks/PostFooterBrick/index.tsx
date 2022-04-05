import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import Column from '../../../components/Grid/Column'
import Row from '../../../components/Grid/Row'
import PostFooter from '../../../components/PostFooter'
import Unit from '../../../components/Unit'
import {
  LayoutDefaultProps,
  LayoutInterface,
  LayoutProps
} from '../../sideProps/LayoutProps'

interface PostFooterProps extends LayoutInterface {
  text: string
  label: string
}

const PostFooterBrick: types.Brick<PostFooterProps> = ({
  width,
  paddingTop,
  paddingBottom
}) => {
  return (
    <Unit width={width} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <Row>
        <Column xs={12}>
          <PostFooter
            label={
              <Text
                placeholder="Label"
                propName="label"
                renderBlock={({ children }) => <>{children}</>}
              />
            }
          >
            <Text
              placeholder="Schreib hier einen Text ..."
              propName="text"
              renderBlock={({ children }) => <p>{children}</p>}
            />
          </PostFooter>
        </Column>
      </Row>
    </Unit>
  )
}

PostFooterBrick.schema = {
  name: 'post-footer',
  label: 'Abbinder',
  getDefaultProps: () => ({
    label: 'Info',
    text: 'Du möchtest mehr über diesen verlassenen Ort erfahren? Dann schreib mir gerne eine persönliche Nachricht!',
    ...LayoutDefaultProps
  }),
  sideEditProps: [LayoutProps]
}

export default PostFooterBrick
