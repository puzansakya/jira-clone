// LIBS
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { Case, Default, Switch } from 'react-if';
import { Link as ReachLink } from 'react-router-dom';
import { TypeIcon } from '../type-icon';


interface PriorityIconProps {
  priority: string;
}

const PriorityIcon = (props: PriorityIconProps) => {
  const { priority } = props;
  return (
    <Switch>
      <Case condition={priority?.toLowerCase() === 'up'}>
        <ArrowUpIcon mr={2} color="red.500" />
      </Case>
      <Default>
        <ArrowDownIcon mr={2} color="green.500" />
      </Default>
    </Switch>
  );
};

interface CardProps {
  routeEnum: any;
  block: any;
  index: number;
}
export const Card = (props: CardProps) => {
  const { routeEnum, block, index } = props;
  return (
    <Draggable draggableId={props.block?.id + ''} index={props.index}>
      {(provided: any, snapshot: any) => {
        return (
          <Link
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
            }}
            as={ReachLink}
            to={`${routeEnum.ISSUE_DETAIL}/${props.block?.id}`}
          >
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              aria-roledescription="Press space bar to lift the block"
            >
              <Box
                color="issue.card.color"
                w="full"
                mb="2"
                border="1px"
                cursor="pointer"
                borderColor="gray.300"
                bg={`${
                  snapshot.isDragging
                    ? 'issue.card.dragging'
                    : 'issue.card.background'
                }`}
                p={3}
                borderRadius="sm"
                shadow="sm"
                _hover={{ bg: 'issue.card.hoverBackground' }}
              >
                <Text fontSize="sm">{props.block.title}</Text>

                <Flex justifyContent="space-between" mt={3} alignItems="center">
                  <HStack spacing={1}>
                    <TypeIcon type={props.block?.type?.name} />
                    <PriorityIcon priority={props.block?.priority?.icon} />
                  </HStack>
                  <Avatar
                    size="xs"
                    name={`${props.block.reporter?.firstName} ${props.block.reporter?.lastName}`}
                    src={props.block.reporter?.avatar}
                  />
                </Flex>
              </Box>
            </div>
          </Link>
        );
      }}
    </Draggable>
  );
};
