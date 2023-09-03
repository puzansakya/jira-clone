// LIBS
import { ArrowDownIcon, ArrowUpIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import {
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsFillExclamationOctagonFill,
} from 'react-icons/bs';
import { Case, Default, Switch } from 'react-if';
import { Link as ReachLink } from 'react-router-dom';
import { RouteEnum } from '../../../routes/routeEnum';

interface TypeIconProps {
  type: string;
}

export const TypeIcon = (props: TypeIconProps) => {
  const { type } = props;
  return (
    <Switch>
      <Case condition={type?.toLowerCase() === 'story'}>
        <BsFillCheckSquareFill size="16px" color="#4fade6" />
      </Case>
      <Case condition={type?.toLowerCase() === 'bug'}>
        <BsFillExclamationOctagonFill size="16px" color="#e44d42" />
      </Case>
      <Default>
        <BsFillBookmarkFill size="16px" color="#65ba43" />
      </Default>
    </Switch>
  );
};

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

const Card = (props: any) => {
  console.log(props.block);
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
            to={`${RouteEnum.ISSUE_DETAIL}/${props.block?.id}`}
          >
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              aria-roledescription="Press space bar to lift the block"
            >
              <Box
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

export default Card;
