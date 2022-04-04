import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import { ReactBricks } from 'react-bricks/frontend'
import config from '../react-bricks/config'
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const reactBricksConfig = {
    ...config
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ReactBricks {...config}>
        <Component {...pageProps} />
      </ReactBricks>
    </>
  )
}

export default MyApp
