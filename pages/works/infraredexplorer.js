import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Flex,
  Box,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const RefBox = ({ children }) => {
  return (
    <Box
      borderRadius="lg"
      my={6}
      p={3}
      textAlign="justify"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      {children}
    </Box>
  )
}

const Work = () => (
  <Layout title="Infrared Explorer">
    <Container maxW="container.lg">
      <Title>
        Infared Explorer <Badge>2019-Current</Badge>
      </Title>
      <P>
        Scientists have long relied on imaging to visualize invisible phenomena
        and thus advance science. The{' '}
        <Link href="https://youtu.be/sqDGXmBCmV4" isExternal>
          Infrared Explorer
        </Link>{' '}
        is a smartphone app that we are developing to realize the educational
        promise of scientific imaging — using low-cost thermal imaging as an
        exmaple.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android & iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java + Swift</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
        Theory of concreteness fading offers a framework to combine their advantages for making connections in
these different settings – by beginning with physical interactions with concrete instantiations of a garget
concept, and gradually and explicitly fading toward more abstract representations
          <WorkImage
            src="/images/works/smartir_conceptual_frame.jpg"
            alt="conceptual"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            <Badge mr={2}>Featured Research Award</Badge>
            Xing, W., Huang, X., <strong>Li, C.</strong>, & Xie, C. (2020).
            Design and evaluation of Augmented Infrared Reality for students’
            learning of thermodynamics. Presented at{' '}
            <i>
              the Annual International Convention of Association of Educational
              Communications and Technology
            </i>
            .
          </RefBox>
          <RefBox>
            Xing, W., <strong>Li, C.</strong>, & Xie, C. (under review).
            Teaching Thermodynamics with Augmented Interaction and Learning
            Analytics. <i>Computers & Education</i>.
          </RefBox>
        </ListItem>
        <ListItem>
          As a mobile app, the Infrared Explorer can be used anywhere to capture
          thermal images, record videos, and share them through email or social
          networks. The app has its own galleries for storing images and videos,
          which also provide many functionalities for managing, editing, and
          annotating images and videos.
          <WorkImage
            src="/images/works/ie.png"
            alt="ie"
            w={{ md: '60%', sm: '100%' }}
          />
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
