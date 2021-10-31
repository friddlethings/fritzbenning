import { types } from 'react-bricks'
import HeroImage from './HeroImage'
import HeroUnit from './MyHeroUnit'
import PageStage from './PageStage'
import Richtext from './Richtext'
import Teaser from './Teaser'
import TeaserGallery from './TeaserGallery'

const bricks: types.Brick<any>[] = [
  HeroUnit,
  Richtext,
  PageStage,
  HeroImage,
  TeaserGallery,
  Teaser,
]

export default bricks
