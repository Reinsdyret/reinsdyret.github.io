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
  HStack,
  Container,
  SimpleGrid,
  theme,
  Image,
  Card,
  CardBody,
  CardHeader,
  Button,
  Divider,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FaGraduationCap, FaBriefcase, FaHeart, FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function App() {
  let textColor = "gray.200";
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.900" minH="100vh">

        {/* Hero Section */}
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8}>
            <Box textAlign="center" py={16}>
              <Image
                borderRadius="full"
                boxSize="200px"
                src="meg.jpg"
                alt="Lars Haukland"
                mx="auto"
                mb={6}
                border="4px solid"
                borderColor="blue.500"
              />
              <Heading size="2xl" mb={4}>
                Lars Haukland
              </Heading>
              <Text fontSize="xl" color={textColor} mb={6} maxW="600px" mx="auto">
                Master's student in Informatics specializing in Algorithms at University of Bergen
              </Text>
              <HStack justify="center" spacing={4} mb={6}>
                <HStack>
                  <Icon as={FaMapMarkerAlt} color="blue.500" />
                  <Text>Bergen, Norway</Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color="blue.500" />
                  <Link href="mailto:lars.haukland@proton.me">Contact</Link>
                </HStack>
              </HStack>
              <HStack justify="center" spacing={4}>
                <LinkBox>
                  <Button leftIcon={<Image boxSize="20px" src="github.png" alt="GitHub" />} colorScheme="blue">
                    <LinkOverlay href="https://github.com/Reinsdyret">GitHub</LinkOverlay>
                  </Button>
                </LinkBox>
                <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
                  LinkedIn
                </Button>
              </HStack>
            </Box>

            {/* About Me Section */}
            <Card bg="gray.800" w="full" shadow="lg">
              <CardHeader>
                <Heading size="lg">About Me</Heading>
              </CardHeader>
              <CardBody>
                <Text color={textColor} lineHeight="tall">
                  I am Lars, a 5th year master student looking for a place to start my developer career.
                  With backend and frontend work experience I see myself as a fullstack developer and keen to learn more about them both.
                  I am a social outgoing guy who loves participating in sports and other social activities.

                  <br /> <br />
                  I have experience developing with: Java, Python, Rust, JavaScript and TypeScript.
                </Text>
              </CardBody>
            </Card>

            {/* Education Section */}
            <Card bg="gray.800" w="full" shadow="lg">
              <CardHeader>
                <HStack>
                  <Icon as={FaGraduationCap} color="green.500" boxSize={6} />
                  <Heading size="lg">Education</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Master of Science in Informatics</Heading>
                      <Badge colorScheme="green">Aug. 2024 - Jun. 2026</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>University of Bergen (UiB)</Text>
                    <Text color={textColor} fontSize="sm" mb={2}>Specialization: Algorithms</Text>
                    <Text color={textColor} fontSize="sm">
                      For my master thesis I am focusing on trading algorithms.
                  The main focus is on how people get assigned GPs when they want to switch GP in Norway.
                  I am exploring algorithms that would cut down the waitlists and waiting time for changing GP.
                  My counselor for the thesis is Fredrik Manne.
                  <br />
                  <br />
                  I am also participating in a project in relation to a course at UiB where we contribute to the NovaJS engine.
                  This is a JavaScript engine with data oriented design written in Rust.
                    </Text>
                  </Box>
                  
                  <Divider />
                  
                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Bachelor in Computer Science</Heading>
                      <Badge colorScheme="blue">Aug. 2021 - Jun. 2024</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>University of Bergen (UiB)</Text>
                    <Text color={textColor} fontSize="sm">
                      Foundation in programming, data structures, and software development.
                    </Text>
                  </Box>
                </VStack>
              </CardBody>
            </Card>

            {/* Work Experience Section */}
            <Card bg="gray.800" w="full" shadow="lg">
              <CardHeader>
                <HStack>
                  <Icon as={FaBriefcase} color="purple.500" boxSize={6} />
                  <Heading size="lg">Work Experience</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Fullstack Developer Intern</Heading>
                      <Badge colorScheme="purple">Summer 2025</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>Kantega</Text>
                    <Text color={textColor} fontSize="sm">
                      Developed a support portal application for Lindbak.
                      Used React with NextJS and Python backend with FastAPI plus Google Cloud run functions.
                    </Text>
                  </Box>
                  
                  <Divider />

                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Backend Developer Intern</Heading>
                      <Badge colorScheme="purple">Summer 2024</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>Mnemonic</Text>
                    <Text color={textColor} fontSize="sm">
                      Extending a microservice for storing and updating GeoIP data. 
                      Included extending the REST API in Java, liquibase migrations, extending WebSocket API 
                      and creating a performance focused routine for updating the database daily with new data.
                    </Text>
                  </Box>
                  
                  <Divider />
                  
                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Group leader</Heading>
                      <Badge colorScheme="orange">Aug. 2022 - Current</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>University of Bergen</Text>
                    <Text color={textColor} fontSize="sm">
                      Assisted in different informatics courses at UiB, mostly bachelor level.
                      Includes holding 2 hour seminar each week plus grading assignments.
                    </Text>
                  </Box>

                  <Divider />
                  
                  <Box w="full">
                    <HStack justify="space-between" mb={2}>
                      <Heading size="md">Success Manager</Heading>
                      <Badge colorScheme="teal">Jan 2022 - Jan 2025</Badge>
                    </HStack>
                    <Text color={textColor} mb={1}>Noroff Accelerate</Text>
                    <Text color={textColor} fontSize="sm">
                      Part time job besides studies with varying tasks. 
                      In the beginning it was mostly adminstrative work related to coding bootcamps by Noroff Accelerate.
                      Got more responsibility after some time and in the end I led my own Python bootcamp and helped in others with grading and etc.
                    </Text>
                  </Box>
                </VStack>
              </CardBody>
            </Card>

            {/* Hobbies & Interests Section */}
            <Card bg="gray.800" w="full" shadow="lg">
              <CardHeader>
                <HStack>
                  <Icon as={FaHeart} color="red.500" boxSize={6} />
                  <Heading size="lg">Hobbies & Interests</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <VStack align="start" spacing={3}>
                    <Heading size="sm" color="blue.500">Programming Projects</Heading>
                    <Text color={textColor} fontSize="sm">
                      Love building side projects and experimenting with new technologies. 
                      Currently exploring a little embedded programming and web development.
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={3}>
                    <Heading size="sm" color="green.500">Sport</Heading>
                    <Text color={textColor} fontSize="sm">
                      I have trained alot of different sports while studying.
                      Lately I have mostly done road cycling, bouldering and swimming, but I have also done brazilian jiu jitsu and strength training.
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={3}>
                    <Heading size="sm" color="purple.500">Hiking & Nature</Heading>
                    <Text color={textColor} fontSize="sm">
                      Love exploring the beautiful Norwegian mountains and fjords.
                      Both by hiking and longer distance bike rides.
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={3}>
                    <Heading size="sm" color="orange.500">Learning</Heading>
                    <Text color={textColor} fontSize="sm">
                      I am always interested in learning something new and 
                      the process of being a total beginner is very humbling.
                      Now im learning how to swim freestyle and also learning alot 
                      of new programming languages in relation to school and side projects.
                    </Text>
                  </VStack>
                </SimpleGrid>
              </CardBody>
            </Card>

            {/* Footer */}
            <Box textAlign="center" py={8}>
              <Text color={textColor}>
                Built with React & Chakra UI • 
                <Link href="https://github.com/Reinsdyret/reinsdyret.github.io" color="blue.500" ml={2}>
                  View Source
                </Link>
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
