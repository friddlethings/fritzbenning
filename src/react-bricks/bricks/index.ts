import { types } from 'react-bricks'
import HeroImage from './HeroImage'
import HeroUnit from './MyHeroUnit'
import PageStage from './PageStage'
import Richtext from './Richtext'

const bricks: types.Brick<any>[] = [HeroUnit, Richtext, PageStage, HeroImage]

export default bricks
