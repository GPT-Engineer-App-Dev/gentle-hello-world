import { Container, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import { useDishes } from "../integrations/supabase/index.js";

const Dishes = () => {
  const { data: dishes, isLoading, isError } = useDishes();

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" color="red.500">Failed to load dishes.</Text>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Dishes Page</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Country</Th>
              <Th>Size</Th>
              <Th>Type</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dishes.map((dish) => (
              <Tr key={dish.id}>
                <Td>{dish.name}</Td>
                <Td>{dish.country}</Td>
                <Td>{dish.size}</Td>
                <Td>{dish.type}</Td>
                <Td isNumeric>{dish.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Dishes;