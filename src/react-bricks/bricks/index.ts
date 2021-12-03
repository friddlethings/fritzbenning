import { types } from 'react-bricks'
import Divider from './Divider'
import HeroImage from './HeroImage'
import Image from './Image'
import ImageGallery from './ImageGallery'
import KeyValueItem from './KeyValueItem'
import KeyValueList from './KeyValueList'
import Listing from './Listing'
import ListingItem from './ListingItem'
import PageStage from './PageStage'
import PostGallery from './PostGallery'
import Richtext from './Richtext'

const bricks: types.Brick<any>[] = [
  Richtext,
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
