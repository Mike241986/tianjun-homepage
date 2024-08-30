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
  <Layout title="Telelab">
    <Container maxW="container.lg">
      <Title>
        Telelab - Science Lab on the Cloud <Badge>2020-Current</Badge>
      </Title>
      <P>
        <Link href="https://telelab2.intofuture.org" isExternal>
          Telelab
        </Link>{' '}
        approximates real-world observation and laboratory experiences in an
        online environment with mechanisms including, but not limited to,
        telepresence, scientific visualization, data synchronization, remote
        control, mixed reality, and social interactions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js + Node.js + Kubernetes Cluster</span>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Like video conferencing software, Telelab allows many students to
          freely access and participate in ongoing and past experiments from a
          Web browser and allows any educators to create, operate, and manage
          their own remote labs. We envision it as an implementation of remote
          labs 2.0, a distributed model in contrast to the first generation of
          remote labs that are somewhat centralized. With Telelab, even students
          can start their own remote labs and share with others—imagine a
          student in the United States performs an experiment in the lab and
          shares it with students in Africa!
          <WorkImage
            src="/images/works/telelab-distributed-model.png"
            alt="telelab_model"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
          Xie, C., <strong>Li, C.</strong>, Sung, S., & Jiang, R. (2022). Engaging students in distance learning of science with remote labs 2.0. <i>IEEE Transactions on Learning Technologies, 15</i>(1), 15-31.
          </RefBox>
        </ListItem>
        <ListItem>
          Student interface of Telelab, where students can investigate
          scientific phenominon visually and interactively and collaborate with
          peers and teachers in real time.
          <WorkImage
            src="/images/works/telelab-chatroom.png"
            alt="telelab-chatroom"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
          Sung, S. H., <strong>Li, C.</strong>, Huang, X., & Xie, C. (2021). Enhancing distance learning of science—Impacts of remote labs 2.0 on students' behavioural and cognitive engagement. <i>Journal of Computer Assisted Learning, 37</i>(6), 1606-1621.
          </RefBox>
        </ListItem>
        <ListItem>
          Telelab is being used by science educators around the world.{' '}
          <WorkImage
            src="/images/works/telelab-taiwan-02.png"
            alt="telelab-taiwan"
            w={{ md: '60%', sm: '100%' }}
          />
          <RefBox>
          Jiang, R., <strong>Li, C.</strong>, Huang, X., Sung, S., & Xie, C. (2021). Remote Labs 2.0 to the Rescue. <i>The Science Teacher, 88</i>(6), 63-71.
          </RefBox>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
