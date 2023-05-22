import { Box, Container, Flex, Text } from '@chakra-ui/react';

const MOCK_PERSONS = [
  {
    id: 1,
    name: 'john',
  },
  {
    id: 2,
    name: 'puzan',
  },
];

// THIS IS MAIN COMPONENT FOR COMPONENT INJECTION
const List = ({ components, persons }: any) => {
  return (
    <components.wrapper>
      {persons.map((person: any) => {
        return <components.item key={person.id} item={person} />;
      })}
    </components.wrapper>
  );
};

// THESE ARE COMPONENT TO BE INJECTED
const Hello = ({ children }: any) => {
  return (
    <Flex direction="column" gap={3} p={4} rounded="md" bg="red.100">
      {children}
    </Flex>
  );
};
const Item = ({ item }: any) => {
  return (
    <Box
      p={2}
      rounded="md"
      cursor="pointer"
      bg="red.300"
      transition="transform .2s ease-in-out "
      _hover={{
        bg: 'red.400',
        transform: 'scale(1.025)',
      }}
    >
      <Text>{item.name}</Text>
    </Box>
  );
};

export function ExperimentalPlayground() {
  return (
    <Container maxW="sm">
      <List
        persons={MOCK_PERSONS}
        components={{
          wrapper: Hello,
          item: Item,
        }}
      />
    </Container>
  );
}

export default ExperimentalPlayground;
