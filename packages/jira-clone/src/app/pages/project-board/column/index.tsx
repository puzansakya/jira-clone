  // LIBS
import { Box, Flex, Text } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

  // HOOKS
import useFlexGridMaker from '../../../hooks/use-flex-grid-maker';

  // COPONENTS
import CardWrapper from '../card-wrapper';

const Column = (props: any) => {
  const { EACH_COL_WIDTH, GUTTER_WIDTH } = useFlexGridMaker();

  return (
    <Draggable draggableId = {props.column.id + ''} index = {props.index}>
      {(provided: any) => (
        <Box
          w  = {EACH_COL_WIDTH}
          px = {GUTTER_WIDTH}
          {...provided.draggableProps}
          ref = {provided.innerRef}
        >
          <Flex
            w            = "full"
            direction    = "column"
            border       = "1px"
            borderColor  = "issue.column.borderColor"
            borderRadius = "md"
            minWidth     = "220px"
            bg           = "issue.column.background"
            minHeight    = {96}
          >
            <Text
              textTransform = "uppercase"
              fontSize      = "xs"
              p             = "2"
              {...provided.dragHandleProps}
            >
              {props.column.name}
            </Text>
            <Droppable
                //
              droppableId = {props.column.id + ""}
              type        = "task"
            >
              {(provided: any, snapshot: any) => (
                <Box
                  p          = "2"
                  bg         = {`${snapshot.isDraggingOver ? 'gray.300' : 'white'}`}
                  transition = "background-color 0.5s ease"
                  minHeight = "100px"
                  ref       = {provided.innerRef}
                  {...provided.droppableProps}
                >
                  <CardWrapper
                    blocks = {props.blocks}
                  />
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default Column;
