export const fetchIssueDetail: any = (issueId: string) => async (dispatch: any, getState: any) => {

    const response = await fetch(
        `http://localhost:8000/api/v1/issues/${issueId}?eager=[project,type,status,priority,reporter]`
    );

    return await response.json();

}
