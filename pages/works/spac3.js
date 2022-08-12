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
  <Layout title="SPAC3">
    <Container maxW="container.lg">
      <Title>
        SPAC3{' '}
        <Badge>2022-Current</Badge>
      </Title>
      <P>
        Project SPAC3 (pronounced “space”, A <strong>C</strong>ulturally Relevant Approach to <strong>Spa</strong>tial <strong>C</strong>omputational Thinking
        Skills and <strong>C</strong>areer Awareness through an Immersive Virtual Environment), to develop an innovative informal
        learning program and suitable technologies for two main project
        objectives: 1) foster upper elementary school Latinx students’ spatial
        computational thinking skills; 2) raise upper elementary school Latinx
        students’ awareness of computationally-intensive careers, interest and
        self-efficacies in computing and engineering
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform (under development)</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Based on the concreteness fading theory, we will design the learning
          activities to start with a concrete representation of a key spatial
          concept that affords physical interactions; then transfer to a generic
          pictorial representation; and end with the decontextualized abstract
          representations.
          <WorkImage
            src="/images/works/spac3_conceptual_frame.jpg"
            alt="spac3_conceptual_frame"
            w={{ md: '60%', sm: '100%' }}
          />
        </ListItem>
        <br />
        <ListItem>
        To help students practice procedural and generative paradigms of spatial computational thinking in MEE, we will design a new SPAC3 module.
          <WorkImage
            src="/images/works/spac3_functions.jpg"
            alt="spac3_functions"
            w={{ md: '60%', sm: '100%' }}
          />
        </ListItem>
        <br />
        <ListItem>
        An example of using the SPAC3 module functions to create Chichen Itza’s El Castillo, a Mayan pyramid that represents a classic cultural artifact in Mesoamerica, and use the CheckShape block to automatically validate the spatial programming results.
          <WorkImage
            src="/images/works/spac3.jpg"
            alt="spac3"
            w={{ md: '60%', sm: '100%' }}
          />
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
