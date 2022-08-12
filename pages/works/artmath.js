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
  <Layout title="ART-Math">
    <Container maxW="container.lg">
      <Title>
        ART-Math <Badge>2022-Current</Badge>
      </Title>
      <P>
        ART-Math, a research-based interactive learning and creative
        construction platform for 3-8th grade students to engage in a
        transformative mathematical learning process, Abstraction -
        Representation - Transformation (ART)
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform (under development)</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js + Node.js + MySQL</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          The combination of artifact creation and crowdsourcing in ART-Math
          empowers students to be the creator and supporters of each other’s
          learner experiences, thereby eliminating the big bottleneck in
          development of culturally relevant educational technology. More
          specifically, ​​we will design a crowdsourcing infrastructure in
          ART-Math to adapt student-generated content and expand the pools of
          math stories, visual assets and prompts.
          <WorkImage
            src="/images/works/artmath_concept.jpg"
            alt="conceptual framework"
            w={{ md: '60%', sm: '100%' }}
          />
          <WorkImage
            src="/images/works/artmath.png"
            alt="user interface"
            w={{ md: '60%', sm: '100%' }}
          />
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
