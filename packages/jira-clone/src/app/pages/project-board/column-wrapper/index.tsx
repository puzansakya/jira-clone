import Column from "../column";

export const ColumnWrapper = (props: any) => {
    const { column, blockMap, index } = props;
    const blocks                      = column.blockIds.map((blockId: any) => blockMap[blockId]);
    return (
        <Column
            column                     = {column}
            blocks                     = {blocks}
            index                      = {index}
        />
    );
};

export default ColumnWrapper;