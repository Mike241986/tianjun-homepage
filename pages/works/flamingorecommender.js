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
  <Layout title="Recommender">
    <Container maxW="container.lg">
      <Title>
        Recommendation System <Badge>2019-2020</Badge>
      </Title>
      <P>
        The recommender system is embedded in a teachers' professional learning
        platform with more than 10,000 users, Flamingo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch + FastAPI</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          There are two components in the system: (1) a hybrid recommender
          system that recommends courses to take and (2) a semantic matching
          system that recommends videos and readings based on participants' quiz
          answers. The hybrid recommendation system consists of three deep
          learning based filtering algorithms: i) knowledge-based filtering that
          resembles an expert system, where information is filtered based on
          content experts’ opinions on learning paths of users with different
          goals (e.g. professional development, earning credentials, or content
          review); ii) content-based filtering that incorporates manually
          created metadata of users (e.g. learning styles) and learning
          resources (e.g. categories, difficulty, and etc.), as well as the
          current user’s previous actions; and iii) collaborative filtering
          recommends by calculating metrics (e.g. similarity) from other users’
          prior actions. The semantic matching system utilizes bidirectional
          encoder representations from transformers (BERT) to infer potential
          learning videos and materials based on users’ quiz answers.
          <WorkImage
            src="/images/works/flamingo_recommender.jpg"
            alt="flamingo_recommender"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            <Badge mr={2}>Manuscript in Preparation</Badge>
            <strong>Li, C.</strong>, & Xing, W. Investigating the Effectiveness of an AI-based Recommender in an Online Professional Development Platform.
          </RefBox>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
