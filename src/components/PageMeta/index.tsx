import Head from 'next/head'

interface PageMetaProps {
  title: string
  description: string
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} - Fritz Benning</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default PageMeta
