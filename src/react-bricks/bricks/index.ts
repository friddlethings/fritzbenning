import { types } from 'react-bricks/frontend'
import DividerBrick from './DividerBrick'
import HeroImageBrick from './HeroImageBrick'
import HeroTextTileBrick from './HeroTextTileBrick'
import ImageGalleryBrick from './ImageGalleryBrick'
import ImageBrick from './ImageGalleryBrick/ImageBrick'
import KeyValueListBrick from './KeyValueListBrick'
import KeyValueItem from './KeyValueListBrick/KeyValueListItem'
import ListingBrick from './ListingBrick'
import ListingItemBrick from './ListingBrick/ListingItemBrick'
import PostFooterBrick from './PostFooterBrick'
import PostGalleryBrick from './PostGalleryBrick'
import RichtextBrick from './RichtextBrick'
import StageBrick from './StageBrick'

const bricks: types.Brick<any>[] = [
  RichtextBrick,
  PostFooterBrick,
  StageBrick,
  HeroImageBrick,
  PostGalleryBrick,
  DividerBrick,
  KeyValueListBrick,
  KeyValueItem,
  ListingBrick,
  ListingItemBrick,
  ImageGalleryBrick,
  ImageBrick,
  HeroTextTileBrick
]

export default bricks
