import { types } from 'react-bricks/frontend'
import Divider from './Divider'
import HeroImage from './HeroImage'
import ImageGallery from './ImageGallery'
import Image from './ImageGallery/Image'
import KeyValueList from './KeyValueList'
import KeyValueItem from './KeyValueList/KeyValueListItem'
import Listing from './Listing'
import ListingItem from './Listing/ListingItem'
import PageStage from './PageStage'
import PostFooter from './PostFooter'
import PostGallery from './PostGallery'
import Richtext from './Richtext'

const bricks: types.Brick<any>[] = [
  Richtext,
  PostFooter,
  PageStage,
  HeroImage,
  PostGallery,
  Divider,
  KeyValueList,
  KeyValueItem,
  Listing,
  ListingItem,
  ImageGallery,
  Image,
]

export default bricks
