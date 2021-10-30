import 'normalize.css'
import React from 'react'
import { ReactBricks } from 'react-bricks'
import config from './src/react-bricks/config'
import './src/styles/index.scss'

// Wraps every page in ReactBricks component
export const wrapPageElement = ({ element }) => {
  return <ReactBricks {...config}>{element}</ReactBricks>
}
