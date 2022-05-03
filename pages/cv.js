import { useState } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'


const CV = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <Layout title="Curriculum Vitae">
      <Container maxW="container.lg" m={4}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
          <div style={{ height: '900px' }}>
            <Viewer
              fileUrl="/Chenglu_CV.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </Container>
    </Layout>
  )
}

export default CV
export { getServerSideProps } from '../components/chakra'
