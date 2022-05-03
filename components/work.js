import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, ...rest }) => (
  <Flex justifyContent='center' bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.500')} mt={4} p={2}>
    <Image borderRadius="lg" w="full" src={src} alt={alt} {...rest} />
  </Flex>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
