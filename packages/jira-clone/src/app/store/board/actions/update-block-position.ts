import { createNextState } from "@reduxjs/toolkit";
import { AppDispatch } from "../..";
import { updateBoardData } from "./update-board-data"

export const updateBlockPosition: any = (payload: any, source: any, destination: any, currentItem: any) => async (dispatch: AppDispatch, getState: any) => {

    const prevIssueId = payload.columns[destination.droppableId].blockIds[destination.index - 1];
    const nextIssueId = payload.columns[destination.droppableId].blockIds[destination.index + 1];

    const prevIssue = payload.blocks[prevIssueId];
    const nextIssue = payload.blocks[nextIssueId];

    let position = 0;

    if (!prevIssue && !nextIssue) {
        position = 0.1
    } else if (!prevIssue) {
        position = nextIssue.listPosition / 2;
    } else if (!nextIssue) {
        position = 1
    } else {
        position = (nextIssue.listPosition + prevIssue.listPosition) / 2;
    }

    const nextPayload = createNextState(payload, (draftState: any) => {
        draftState.blocks[currentItem.id] = { ...currentItem, listPosition: position, status: destination.droppableId }
    })

    dispatch(updateBoardData(nextPayload))

    const payloadUpdate = {
        id: currentItem.id,
        listPosition: position.toFixed(2),
        statusId: destination.droppableId
    }

    await fetch('http://localhost:8000/api/v1/issues', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadUpdate),
    });


}
