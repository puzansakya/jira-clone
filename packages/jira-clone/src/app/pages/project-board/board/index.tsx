  // LIBS
import { Box, Flex } from '@chakra-ui/react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { When } from 'react-if';
import { useDispatch, useSelector } from 'react-redux';

  // UI
import { ColumnWrapper, PageLoading } from 'ui';

  // HOOKS
import useDnd from '../../../hooks/use-dnd';
import { useFlexGridMaker } from '../../../hooks/use-flex-grid-maker';
import { RouteEnum } from '../../../routes/routeEnum';

  // STORES
import * as fromBoardReducers from '../../../store/board';
import * as fromInterface from '../../../ts';

  // COMPONENTS

const Board = ({ handleOpenIssueDetailModal }: any) => {
  const data: any   = useSelector(fromBoardReducers.selectBoardData);
  const status: any = useSelector(fromBoardReducers.selectBoardStatus);

  const dispatch                = useDispatch();
  const { ROW_NEGATIVE_MARGIN } = useFlexGridMaker();

  const { onDragStart, onDragUpdate, onDragEnd } = useDnd({
    initialData: data,
    updateData : ({ newState, currentItem, source, destination }: any) => {
      console.log({
        currentItem,
        source,
        destination,
      });

      dispatch(
        fromBoardReducers.updateBlockPosition(
          newState,
          source,
          destination,
          currentItem
        )
      );
    },
  });

  if (status === fromInterface.State.LOADING) {
    return <PageLoading h = "100%" />;
  }

  return (
    <Box mt = {6} w = "full">
      <DragDropContext
        onDragStart  = {onDragStart}
        onDragUpdate = {onDragUpdate}
        onDragEnd    = {onDragEnd}
      >
        <Droppable
          droppableId = "all-columns"
          direction   = "horizontal"
          type        = "column"
        >
          {(provided) => (
            <Flex
              wrap = "wrap"
              mx   = {ROW_NEGATIVE_MARGIN}
              {...provided.droppableProps}
              ref = {provided.innerRef}
            >
              <When condition = {data?.columnOrder}>
                {data.columnOrder.map((columnId: any, index: any) => {
                  const column = data.columns[columnId];
                  return (
                    <ColumnWrapper
                      routeEnum = {RouteEnum}
                      key       = {column.id}
                      column    = {column}
                      blockMap  = {data.blocks}
                      index     = {index}
                    />
                  );
                })}
              </When>

              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};
export default Board;
