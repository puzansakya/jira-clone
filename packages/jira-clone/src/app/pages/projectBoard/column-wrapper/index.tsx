import Column from "../column";

// COLUMN WRAPPER
export const ColumnWrapper = (props: any) => {
    const { column, blockMap, index } = props;
    const blocks = column.blockIds.map((blockId: any) => blockMap[blockId]);
    return (
        <Column
            handleOpenIssueDetailModal={props.handleOpenIssueDetailModal}
            column={column}
            blocks={blocks}
            index={index}
        />
    );
};

export default ColumnWrapper;