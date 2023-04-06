import React, { useState } from 'react';

export const DROP_TYPES = {
  SAME_LIST: 'SAME_LIST',
  DIFF_LIST: 'DIFF_LIST',
  COLUMN: 'COLUMN',
};
interface useDndProps {
  initialData: any;
  updateData: any;
  transform?: any;
  dragStartAnnounce?: string;
  dragUpdateAnnounce?: string;
  dragEndAnnounce?: string;
}

const useDnd = ({
  initialData,
  transform,
  updateData,
  dragStartAnnounce = 'You have lifted the item in position',
  dragUpdateAnnounce = 'You have moved the item to position',
  dragEndAnnounce = 'You have moved the item from position',
}: useDndProps) => {
  const [_initialData, set__initialData] = useState<any>({});

  React.useEffect(() => {
    set__initialData(initialData);
  }, [initialData]);

  const onDragStart = (start: any, provided: any) => {
    provided.announce(`${dragStartAnnounce} ${start.source.index + 1}`);
  };

  const onDragUpdate = (update: any, provided: any) => {
    const message = update.destination
      ? `${dragUpdateAnnounce} ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;

    provided.announce(message);
  };

  const onDragEnd = (result: any, provided: any) => {
    const message = result.destination
      ? `${dragEndAnnounce}
        ${result.source.index + 1} to ${result.destination.index + 1}`
      : `The item has been returned to its starting position of
        ${result.source.index + 1}`;

    provided.announce(message);

    /**
     * Destination | Source
     * droppableId, index
     */
    const { destination, source, draggableId, type } = result;

    let currentItem = _initialData.blocks[draggableId];
    let blocks = _initialData.blocks;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // ONE WAY OF DOING IT
    if (transform) {
      currentItem = transform({
        sourceColumn: _initialData.columns[source.droppableId],
        destinationColumn: _initialData.columns[destination.droppableId],
        currentItem,
      });
      blocks = { ..._initialData.blocks, [draggableId]: currentItem };
    }

    if (type === 'column') {
      // COL DRAG
      const newColumnOrder = Array.from(_initialData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ..._initialData,
        blocks,
        columnOrder: newColumnOrder,
      };

      /**
       * PERFORM CALLBACK FUNCTION
       */
      return updateData({
        newState,
        currentItem: _initialData.columnOrder[source.index],
        source,
        destination,
        dropType: DROP_TYPES.COLUMN,
      });
    }

    const home = _initialData.columns[source.droppableId];
    const foreign = _initialData.columns[destination.droppableId];

    // SAME LIST
    if (home === foreign) {
      const newBlockIds = Array.from(home.blockIds);
      newBlockIds.splice(source.index, 1);
      newBlockIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        blockIds: newBlockIds,
      };

      const newState = {
        ..._initialData,
        blocks,
        columns: {
          ..._initialData.columns,
          [newHome.id]: newHome,
        },
      };

      /**
       * PERFORM CALLBACK FUNCTION
       */
      return updateData({
        newState,
        currentItem,
        source,
        destination,
        dropType: DROP_TYPES.SAME_LIST,
      });
    }

    // MOVING FROM ONE LIST TO ANOTHER
    const homeBlockIds = Array.from(home.blockIds);
    homeBlockIds.splice(source.index, 1);
    const newHome = {
      ...home,
      blockIds: homeBlockIds,
    };

    const foreignBlockIds = Array.from(foreign.blockIds);
    foreignBlockIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      blockIds: foreignBlockIds,
    };

    // todo dynamic key id
    const newState = {
      ..._initialData,
      blocks,
      columns: {
        ..._initialData.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };

    /**
     * PERFORM CALLBACK FUNCTION
     */
    updateData({
      newState,
      currentItem,
      source,
      destination,
      dropType: DROP_TYPES.DIFF_LIST,
    });
  };

  return {
    onDragStart,
    onDragUpdate,
    onDragEnd,
  };
};

export default useDnd;
