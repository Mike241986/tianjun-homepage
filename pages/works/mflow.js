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
  <Layout title="M-Flow">
    <Container maxW="container.lg">
      <Title>
        M-Flow <Badge>2021-current</Badge>
      </Title>
      <P>
        <Link href="https://listeningtowaves.com/mflow" isExternal>
          M-Flow
        </Link>{' '}
        is a flow-based programming language for making music and sound
        compositions. You can drag blocks of sound into the screen, put sound
        recordings in them, connect them with arrows to create sequences, loop
        them to create rhythms, and manipulate them in many different ways. You
        will find that coding and music making can go very good together.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js + Firestore</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Flow-Based Programming</Badge>
          <span>
            Most programming languages, including Scratch and Python-based
            Earsketch (used in the experiences described above), use an
            imperative programming paradigm, in which the commands are executed
            sequentially along the command line. In contrast to imperative
            programming, FBP is a programming paradigm in which the code is a
            direct visualization of the program’s structure, boxes representing
            processes connected by arrows representing the program’s flow. This
            intuitive approach allows people with little CS experience to
            rapidly develop functional applications.
          </span>
          <br />
          <br />
          <p>
            We have submitted a grant proposal to NSF ITEST in 2022. Figures crossed!
          </p>
          <WorkImage
            src="/images/works/mflow_comparison.png"
            alt="mflow_comparison"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            Minces, V., Xing, W., & <strong>Li, C.</strong> (2022, under review). Work in Progress: Mflow, a Flow-based Music Programming Platform for Young Children.{' '}
            Submitted for <i>the VII IEEE World Engineering Education Conference (EDUNINE2023)</i>.
          </RefBox>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
