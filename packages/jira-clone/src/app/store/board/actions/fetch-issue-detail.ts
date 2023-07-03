export const fetchIssueDetail: any = (issueId: string) => async () => {

    const response = await fetch(
        `http://localhost:8000/api/v1/issues/${issueId}?eager=[project,type,status,priority,reporter,assignees]`
    );

    return await response.json();

}
