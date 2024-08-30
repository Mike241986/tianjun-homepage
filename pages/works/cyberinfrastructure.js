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
  <Layout title="FAccT AI in Education">
    <Container maxW="container.lg">
      <Title>
        FAccT AI in Education <Badge>2020-Current</Badge>
      </Title>
      <P>
        Shared Models & Codebase for adopting FAccT AI. For example, researchers
        can utilize our published SafeMathBot as a starting point to build
        socially responsible conversational AI through model fine-tuning.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Pytorch + NumPy + Pandas</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Fair logistic regression (Fair-LR): A binary prediction model based on
          the Seldonian framework of Thomas et al., (2019).{' '}
          <Link
            isExternal
            href="https://github.com/uf-aice-lab/fair-prediction"
          >
            https://github.com/uf-aice-lab/fair-prediction
          </Link>
          .
          <WorkImage
            src="/images/works/fair_lr.png"
            alt="cyberinfrastructure"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            <strong>Li, C.</strong>, Xing, W., & Leite, W. (2021). Yet Another
            Predictive Model? Fair Predictions of Students’ Learning Outcomes in
            an Online Math Learning Platform. In{' '}
            <i>
              LAK21: 11th International Learning Analytics and Knowledge
              Conference
            </i>{' '}
            (pp. 572-578). https://doi.org/10.1145/3448139.3448200
          </RefBox>
          <RefBox>
            <strong>Li, C.</strong>, Xing, W., & Leite, W. (2022, accepted).
            Using Fair AI to Predict Students’ Math Learning Outcomes in an
            Online Platform.
            <i>Interactive Learning Environments</i>
          </RefBox>
        </ListItem>
        <ListItem>
          Fair peer recommender (Fair-NE): A fair peer recommender based on
          DeBayes by Buyl and De Bie (2020).{' '}
          <Link
            href="https://github.com/uf-aice-lab/fair-peer-recommender"
            isExternal
          >
            https://github.com/uf-aice-lab/fair-peer-recommender
          </Link>
          .
          <WorkImage
            src="/images/works/fair_ne.png"
            alt="cyberinfrastructure"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            <strong>Li, C.</strong>, Xing, W., & Leite, W. L. (2022). Toward
            building a fair peer recommender to support help-seeking in online
            learning. <i>Distance Education, 43</i>(1), 30-55.
            https://doi.org/10.1080/01587919.2021.2020619
          </RefBox>
        </ListItem>
        <ListItem>
          Socially responsible ConvAI (SafeMathBot): fine-tuned with GPT2-xl
          with 8 Nvidia RTX 1080Ti GPUs and enhanced with conversation safety
          policies (e.g., threat, profanity, identity attack) using 3,000,000
          math discussion posts by students and facilitators on Algebra Nation.{' '}
          <Link
            href="https://huggingface.co/uf-aice-lab/SafeMathBot"
            isExternal
          >
            https://huggingface.co/uf-aice-lab/SafeMathBot
          </Link>
          .
          <WorkImage
            src="/images/works/safe_math_bot_process.png"
            alt="cyberinfrastructure"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            <strong>Li, C.</strong>, Xing, W., & Leite, W. L. (2022). Building
            socially responsible conversational agents using big data to support
            online learning: A case with algebra nation.{' '}
            <i>British Journal of Educational Technology</i>.
            https://doi.org/10.1111/bjet.13227
          </RefBox>
        </ListItem>
        <ListItem>
          Other relevant publications:
          <RefBox>
            <strong>Li, C.</strong>, & Xing, W. (2022). Revealing factors
            influencing students' perceived fairness: A case with a predictive
            system for math learning. In{' '}
            <i>Proceedings of the Ninth ACM Conference on Learning@ Scale</i>{' '}
            (pp. 409-412).
          </RefBox>
          <RefBox>
            Xing, W., <strong>Li, C.</strong>, & Leite, W. (2022). AlgebraNation
            Dataset: Educational Big Data to Support Fair Educational Machine
            Learning. In{' '}
            <i>Proceedings of Educational Data Mining 2022 FATED Workshop</i>.
          </RefBox>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
