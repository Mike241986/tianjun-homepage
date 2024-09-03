import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FaRobot } from 'react-icons/fa'
import { SiCircuitverse } from "react-icons/si";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 200ms ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Icon
            as={SiCircuitverse}
            alt="logo"
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            style={{ width: '20px', height: '20px' }}
            mr={1}
            mb={0.5}
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Tianjun Wang
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
