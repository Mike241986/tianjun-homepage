import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { FaResearchgate } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from 'react-icons/si'

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m an undergraduate student @ University of Florida!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tianjun Wang
          </Heading>
          <p>
            Fourth-year undergraduate student in Aerospace and Electrical Engineering
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tianjun.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Tianjun is a fourth-year undergraduate student that is actively involved in 3 research labs. He is currently working on creating portable NMR devices and using NQR devices as a method to improve food security. He is planning on pursuing a Ph.D. in Electrical Engineering in NMR/NQR devices. 
{/* 
          Chenglu is a Ph.D. candidate who is actively looking for a job in
          academia in learning analytics, artificial intelligence in education,
          and educational data mining. He has published a number of papers as
          the main contributor (first & second author) in journals such as British Journal of Educational Technology,
          International Journal of Artificial Intelligence in Education, IEEE
          Transactions in Learning Technology, Interactive Learning Environments, Distance Education, and Journal
          of Educational Computing Research. Chenglu is also a full-stack
          developer and has led several successful educational & commercial
          applications. */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My Research Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021-2027 (expected to graduate in May)</BioYear>
          Bachelor of Science in Aerospace Engineering and Bachelor of Science in Electrical Engineering, University of Florida
        </BioSection>
        {/* <BioSection>
          <BioYear>2015-2020</BioYear>
          Completed the Master's program in Learning Technologies (LT) from
          University of Texas at Austin and worked on a Ph.D. degree in LT
        </BioSection> */}
        <BioSection>
          <BioYear>2017-2021</BioYear>
          Graduated from MICS
        </BioSection>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in JiangSu, China.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          music 🎵🎵🎵, travelling🧳, and creating Fair ⚖️, accountable 💪, and
          transparent📖 AI (FAccT)
          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning */}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          {/* <ListItem>
            <Link
              href="https://scholar.google.com/citations?user=TlMZsYQAAAAJ&hl=en"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={SiGooglescholar} />}
              >
                @Chenglu Li
              </Button>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link
              href="https://www.researchgate.net/profile/Chenglu-Li-2"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaResearchgate} />}
              >
                @Chenglu Li
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://www.linkedin.com/in/tianjun-wang" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaLinkedin} />}
              >
                @Tianjun Wang
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Mike241986" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Mike241986
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
