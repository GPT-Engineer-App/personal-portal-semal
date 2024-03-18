import React from "react";
import { Box, VStack, Heading, Text, Image, HStack, Icon, Link, Divider, SimpleGrid, Card, CardHeader, CardBody, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 2",
      description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna.",
    },
    {
      title: "Project 3",
      description: "Fusce vehicula, dui et lobortis maximus, augue velit imperdiet eros.",
    },
  ];

  return (
    <Box p={8}>
      <VStack spacing={8} align="center" textAlign="center">
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8fHwxNzEwNzI3MjM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Semal" />
        <Heading as="h1" size="2xl">
          Semal
        </Heading>
        <Text fontSize="xl" maxW="600px">
          Hi, I'm Semal, a passionate software engineer with expertise in web development. I enjoy building scalable and user-friendly applications.
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/semal" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://linkedin.com/in/semal" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="mailto:semal@example.com" isExternal>
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
        </HStack>
        <Divider />
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{project.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
