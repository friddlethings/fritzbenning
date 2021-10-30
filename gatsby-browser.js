import React from 'react'
import { ReactBricks } from 'react-bricks'
import config from './src/react-bricks/config'

// Wraps every page in ReactBricks component
export const wrapPageElement = ({ element }) => {
  return <ReactBricks {...config}>{element}</ReactBricks>
}
