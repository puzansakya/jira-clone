import Column from '../column';

interface ColumnWrapperProps {
  routeEnum: any;
  column: any;
  blockMap: any;
  index: any;
}
export const ColumnWrapper = (props: ColumnWrapperProps) => {
  const { routeEnum, column, index, blockMap } = props;
  const blocks = column.blockIds.map((blockId: any) => blockMap[blockId]);
  return (
    <Column
      routeEnum={routeEnum}
      column={column}
      blocks={blocks}
      index={index}
    />
  );
};

