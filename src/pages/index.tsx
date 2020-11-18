import {
  Avatar,
  Link as ChakraLink,
  Box,
  Heading,
  Text,
  Icon,
  Link,
} from '@chakra-ui/core'
import {
  FaLinkedin
} from 'react-icons/fa';

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => (
  <Container height="100vh">
    <Avatar size="2xl" src="https://www.gravatar.com/avatar/15cb4683f9aa1f015998d230b61b0ef7?s=200" />
    <Heading mt="3" size="3xl">Colin Hoernig</Heading>
    <Text>
      Tech Lead Manager, @<ChakraLink isExternal href="https://tackle.io">tackle.io</ChakraLink>
    </Text>
    <Box mt="2">
      <Link href="https://www.linkedin.com/in/colinhoernig/" breakout isExternal>
        <Icon as={FaLinkedin} w={6} h={6} />
      </Link>
    </Box>
    <DarkModeSwitch />
  </Container>
)

export default Index
