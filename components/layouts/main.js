import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ModelLoader from '../threeModelLoader'

const LazyThreeModel = dynamic(() => import('../threeModel'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chenglu's homepage" />
        <meta name="author" content="Chenglu Li" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Chenglu Li's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Chenglu Li - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        <LazyThreeModel />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
