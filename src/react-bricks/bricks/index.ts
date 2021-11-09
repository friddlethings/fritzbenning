import { types } from 'react-bricks'
import HeroImage from './HeroImage'
import HeroUnit from './MyHeroUnit'
import PageStage from './PageStage'
import PostGallery from './PostGallery'
import Richtext from './Richtext'

const bricks: types.Brick<any>[] = [
  HeroUnit,
  Richtext,
  PageStage,
  HeroImage,
  PostGallery,
]

export default bricks
