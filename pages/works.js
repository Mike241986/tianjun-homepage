import { Container, Heading, SimpleGrid, Divider, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCyber from '../public/images/works/cyberinfrastructure_eyecatch.jpg'
import thumbTelelab from '../public/images/works/telelab_eyecatch.png'
import thumbIE from '../public/images/works/ie_eyecatch.png'
import thumbAR from '../public/images/works/ar_eyecatch.jpg'
import thumbMFlow from '../public/images/works/mflow_eyecatch.jpg'
import thumbFlamingo from '../public/images/works/flamingo_eyecatch.png'
import thumbART from '../public/images/works/artmath_eyecatch.png'
import thumbSPAC3 from '../public/images/works/spac3_eyecatch.jpg'

const Works = () => (
  <Layout title="Projects">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="cyberinfrastructure"
            title="FAccT AI in Education"
            thumbnail={thumbCyber}
          >
            Investigations, Shared Models, & Code-base for adopting FAccT AI.
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              IES #R305C160004, UF AI Catalyst Award, UF AI SEED grant
            </Badge>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="telelab" title="Telelab" thumbnail={thumbTelelab}>
            Remote Lab 2.0 for STEM education
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              NSF #2054079 & #2131097
            </Badge>
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="alienrescue"
            title="Alien Rescue"
            thumbnail={thumbAR}
            delay={0.1}
          >
            Game-based learning for middle-school students' science learning.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="mflow" thumbnail={thumbMFlow} title="M-Flow">
            Flow-based computing platform with music
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              NSF #1657366 (sub-award)
            </Badge>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="infraredexplorer"
            title="Infared Explorer"
            thumbnail={thumbIE}
          >
            Scientific Imaging for Science Education
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              NSF #2054079
            </Badge>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="spac3"
            thumbnail={thumbSPAC3}
            title="SPAC3"
          >
            Cuturally relevant spatial computational thinking with MineCraft Mod
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              NSF #2148733
            </Badge>
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem
            id="flamingorecommender"
            thumbnail={thumbFlamingo}
            title="Flamingo Recommendation System"
          >
            Course2Course and WithinCourse recommendation system for professional development
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              Helios Foundation
            </Badge>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="artmath"
            thumbnail={thumbART}
            title="ART-Math"
          >
            Mathematical thinking through free-form drawing & story-telling
            <Badge ml='1' colorScheme='green' fontSize='0.6em'>
              Schmidt Future Foundation
            </Badge>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
