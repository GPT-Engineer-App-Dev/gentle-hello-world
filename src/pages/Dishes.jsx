import { Container, Text, VStack } from "@chakra-ui/react";

const Dishes = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Dishes Page</Text>
      </VStack>
    </Container>
  );
};

export default Dishes;