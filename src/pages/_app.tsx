import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import { ReactBricks } from 'react-bricks/frontend'
import config from '../react-bricks/config'
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/hkgrotesk-light-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/hkgrotesk-regular-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/hkgrotesk-medium-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/hkgrotesk-bold-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <ReactBricks {...config}>
        <Component {...pageProps} />
      </ReactBricks>
    </>
  )
}

export default MyApp
