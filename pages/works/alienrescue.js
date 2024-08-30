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
  <Layout title="Alien Rescue">
    <Container maxW="container.lg">
      <Title>
        Alien Rescue <Badge>2016-2020</Badge>
      </Title>
      <P>
        <Link href="https://alienrescue.education.utexas.edu/" isExternal>
          Alien Rescue
        </Link>{' '}
        is an online problem-based 3D immersive learning environment for sixth
        grade science. It combines best practices from educational research with
        innovative technologies to deliver an engaging learning experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity3D + React.js + Node.js + Redis + MySQL</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          I have led the design and development of Alien Rescue V7 & V8 (current
          version). Alien Rescue has been used as part of the science curriculum
          by schools in 29 states and four countries with a diverse ethnic base.
          <WorkImage
            src="/images/works/ar.jpg"
            alt="alien_rescue"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            Liu, M., <strong>Li, C.</strong>, & Pan, Z. (2018). Alien Rescue: A 3D Problem-Based
            Learning Game. In <i>EdMedia+ Innovate Learning</i> (pp. 1203-1209).
            Association for the Advancement of Computing in Education (AACE).
          </RefBox>
          <RefBox>
            Liu, M., <strong>Li, C.</strong>, Pan, Z., & Pan, X. (2019). Mining big data to help
            make informed decisions for designing effective digital educational
            games. <i>Interactive Learning Environments</i>, 1-21.
            https://doi.org/10.1080/10494820.2019.1639061
          </RefBox>
          <RefBox>
            Liu, M., Liu, S., Pan, Z., Zou, W., & <strong>Li, C.</strong> (2019). Examining
            science learning and attitude by at-risk students after they used a
            multimedia-enriched problem-based learning environment.{' '}
            <i>Interdisciplinary Journal of Problem-Based Learning, 13</i>(1),
            6. https://doi.org/10.7771/1541-5015.1752
          </RefBox>
        </ListItem>
        <ListItem>
          I have also led the development of the Teachers' Dashboard of Alien
          Rescue, integrating learning analytics and artifictial intelligence to
          support teaching.
          <WorkImage
            src="/images/works/ar_dashboard.png"
            alt="dashboard"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
            Pan, Z., <strong>Li, C.</strong>, & Liu, M. (2020). Learning Analytics
            Dashboard for Problem-based Learning. In{' '}
            <i>Proceedings of the Seventh ACM Conference on Learning@ Scale</i>{' '}
            (pp. 393-396).
          </RefBox>
          <RefBox>
            Liu, M., <strong>Li, C.</strong>, & Pan, Z. (2022). Creating an Interactive Dashboard
            to Support Middle School Teachers’ Implementation of a
            Technology-Supported Problem-Based Learning Program.{' '}
            <i>International Journal of Designs for Learning, 13</i>(1), 1-18.
          </RefBox>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
