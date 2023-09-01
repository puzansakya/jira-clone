import axios from 'axios';
import { MOCK_COMMENT, MOCK_ISSUE } from './mock';

describe.skip('GET /projects', () => {
  it('should return all the projects', async () => {
    const res = await axios.get(`http://localhost:8000/api/v1/projects`);

    const data = res.data;

    expect(data).toHaveProperty('data'); // Add this assertion to check if 'data' key is present
    expect(res.status).toBe(200);
  });
});

const localhost = 'http://localhost:8000/api/v1';
describe.skip('GET /issues', () => {
  it.skip('should create issue', async () => {
    const projectResponse = await axios.get(`${localhost}/projects`);
    const projects = projectResponse.data.data;

    const userResponse = await axios.get(`${localhost}/users`);
    const users = userResponse.data.data;

    const statusResponse = await axios.get(`${localhost}/statuses`);

    const statuses = statusResponse.data.data;

    const priorityResponse = await axios.get(`${localhost}/priorities`);
    const priorities = priorityResponse.data.data;

    const issueTypeResponse = await axios.get(`${localhost}/priorities`);
    const issueType = issueTypeResponse.data.data;

    const object = {
      title: 'Test Object',
      listPosition: 1,
      description: 'Test Description',
      descriptionText: 'Test Description Text',
      estimate: 10,
      timeSpent: 5,
      timeRemaining: 5,
      typeId: issueType[0].id,
      statusId: statuses[0].id,
      priorityId: priorities[0].id,
      reporterId: users[0].id,
      projectId: projects[0].id,
      assignees: [users[0].id],
    };

    // Create the object using axios
    const res = await axios.post('http://localhost:8000/api/v1/issues', object);

    // Check if the response has an 'id' value and a status of 201
    expect(res.data).toHaveProperty('id');
    expect(res.status).toBe(201);

    // get project
    // pick one project and assign id
    // do same for typeId, statusId, priorityId, reporterId, assignees
    // create following object of following type

    // title: string;
    // listPosition?: number;
    // description?: string;
    // descriptionText?: string;
    // estimate?: number;
    // timeSpent?: number;
    // timeRemaining?: number;

    // typeId?: number;
    // statusId?: number;
    // priorityId?: number;
    // reporterId?: number;
    // projectId?: number;
    // assignees?: string[]

    // use axios to create
    // check if it has id value

    // check if response status is 201
  });
});

describe('GET /comments', () => {
  it('should create comments for an issue', async () => {
    /**
     * CREATE COMMENT
     */

    // create issue
    const issue_created_response = await axios.post(
      `${localhost}/issues`,
      MOCK_ISSUE
    );

    const issue_created = issue_created_response.data;

    // create comment
    const comment_created_response = await axios.post(`${localhost}/comments`, {
      ...MOCK_COMMENT,
      issueId: issue_created.id,
    });

    const comment_created = comment_created_response.data;

    // check if status is 200
    expect(comment_created_response.status).toBe(201);
    // check if data is not null
    expect(comment_created).not.toBeNull();

    /**
     * VERIFY COMMENT
     */
    const commentsResponse = await axios.get(
      `${localhost}/comments?strWhere=issueId:${issue_created.id}`
    );

    const comments = commentsResponse.data;
    // check if status is 200
    expect(commentsResponse.status).toBe(200);

    // check if data is not empty
    expect(comments).not.toHaveLength(0);

    /**
     * UPDATE COMMENT
     */

    const update_comment = {
      ...comment_created,
      body: 'this is updated',
    };

    await axios.put(`${localhost}/comments`, update_comment);

    /**
     * VERIFY COMMENT
     */
    const comment_response_after_updated = await axios.get(
      `${localhost}/comments?strWhere=issueId:${issue_created.id}`
    );

    const comments_after_update = comment_response_after_updated.data;

    const found_comment = comments_after_update.find(
      (comment) => comment.id === comment_created.id
    );

    expect(found_comment.body).toBe('this is updated');

    /**
     * DELETE COMMENT
     */
    const comment_deleted_response = await axios.delete(
      `${localhost}/comments/${comment_created.id}`
    );

    /**
     * VERIFY COMMENT
     */
    const comment_after_delete_response = await axios.get(
      `${localhost}/comments?strWhere=issueId:${issue_created.id}`
    );

    const comment_after_delete = comment_after_delete_response.data;

    const found_index = comment_after_delete.findIndex(
      (comment) => comment.id === comment_created.id
    );

    expect(found_index).toBe(-1);
  });
});

describe.skip('GET /issues', () => {
  it.skip('should create issue', async () => {
    const projectResponse = await axios.get(`${localhost}/projects`);
    const projects = projectResponse.data.data;

    const userResponse = await axios.get(`${localhost}/users`);
    const users = userResponse.data.data;

    const statusResponse = await axios.get(`${localhost}/statuses`);

    const statuses = statusResponse.data.data;

    const priorityResponse = await axios.get(`${localhost}/priorities`);
    const priorities = priorityResponse.data.data;

    const issueTypeResponse = await axios.get(`${localhost}/priorities`);
    const issueType = issueTypeResponse.data.data;

    const object = {
      title: 'Test Object',
      listPosition: 1,
      description: 'Test Description',
      descriptionText: 'Test Description Text',
      estimate: 10,
      timeSpent: 5,
      timeRemaining: 5,
      typeId: issueType[0].id,
      statusId: statuses[0].id,
      priorityId: priorities[0].id,
      reporterId: users[0].id,
      projectId: projects[0].id,
      assignees: [users[0].id],
    };

    // create issue
    const res = await axios.post('http://localhost:8000/api/v1/issues', object);

    // Check if the response has an 'id' value and a status of 201
    expect(res.data).toHaveProperty('id');
    expect(res.status).toBe(201);

    // get project
    // pick one project and assign id
    // do same for typeId, statusId, priorityId, reporterId, assignees
    // create following object of following type

    // title: string;
    // listPosition?: number;
    // description?: string;
    // descriptionText?: string;
    // estimate?: number;
    // timeSpent?: number;
    // timeRemaining?: number;

    // typeId?: number;
    // statusId?: number;
    // priorityId?: number;
    // reporterId?: number;
    // projectId?: number;
    // assignees?: string[]

    // use axios to create
    // check if it has id value

    // check if response status is 201
  });
});
