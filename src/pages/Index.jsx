import { Container, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
      <Link as={RouterLink} to="/dishes" fontSize="2xl" color="teal.500">Go to Dishes</Link>
      </VStack>
    </Container>
  );
};

export default Index;