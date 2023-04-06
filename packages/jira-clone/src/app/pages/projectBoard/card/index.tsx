import { ArrowUpIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';

const Card = (props: any) => {
  return (
    <Draggable draggableId={props.block?.id} index={props.index}>
      {(provided: any, snapshot: any) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            aria-roledescription="Press space bar to lift the block"
          >
            <Box
              onClick={props.handleOpenIssueDetailModal}
              w="full"
              mb="2"
              border="1px"
              cursor="pointer"
              borderColor="gray.300"
              bg={`${snapshot.isDragging ? 'gray.100' : 'white'}`}
              p={3}
              borderRadius="sm"
              shadow="sm"
              _hover={{ bg: 'gray.50' }}
            >
              <Text fontSize="sm">{props.block.description}</Text>
              <Flex justifyContent="space-between" mt={3} alignItems="center">
                <HStack spacing={1}>
                  <CheckCircleIcon h={4} w={4} color="blue.500" />
                  <ArrowUpIcon h={4} w={4} color="red.500" />
                </HStack>
                <Avatar
                  size="xs"
                  name={`${props.block.reporter?.firstName} ${props.block.reporter?.lastName}`}
                  src={props.block.reporter?.avatar}
                />
              </Flex>
            </Box>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
