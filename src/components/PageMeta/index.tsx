import Head from 'next/head'

interface PageMetaProps {
  title: string
  description: string
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | BINGO! - Die Umweltlotterie</title>
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="QftNBTnYQzzbq23iL0Jaox4BM0Ak0FyJGVbAyKZlDI4"
      />
    </Head>
  )
}

export default PageMeta
