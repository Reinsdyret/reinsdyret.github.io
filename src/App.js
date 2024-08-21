import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  LinkOverlay,
  LinkBox,
  Heading,
  VStack,
  Code,
  Grid,
  SimpleGrid,
  theme,
  Image,
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Stack,
  Center,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher justifySelf="flex-end" />
      <Center>
      <Card maxW='sm' align='center' top="100px">
        <CardBody>
        <Center>
          <Image
            borderRadius='full'
            boxSize='300px'
            src='meg.jpg'
            alt='Lars Haukland'
          />
          </Center>

          <Stack mt='6' spacing='3'>
            <Heading>
              Lars Haukland
            </Heading>

            <Text>
              I have just started a master in informatics at UiB. My spesialization will be algorithms.
              
            </Text>
            <Text>
              Check out my github to look at my projects (like this website!).
              And my cv at: <a href='/cv'>haukland.me/cv</a>
            </Text>
          </Stack>

          
            
          </CardBody>

          <Divider />

          <CardFooter>
            <LinkBox>
            <Image
            borderRadius='full'
            boxSize='30px'
            src='github.png'
            alt='github icon'
            />

            <LinkOverlay href="https://github.com/Reinsdyret" />
            </LinkBox>
          </CardFooter>
        </Card>
        </Center>
        </Box>
    </ChakraProvider>
  );
}

export default App;
