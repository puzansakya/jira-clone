import axios from 'axios';

describe('GET /projects', () => {
  it('should return all the projects', async () => {
    const res = await axios.get(`http://localhost:8000/api/v1/projects`);

    const data = res.data;

    expect(data).toHaveProperty('data'); // Add this assertion to check if 'data' key is present
    expect(res.status).toBe(200);
  });
});

const localhost = 'http://localhost:8000/api/v1';
describe('GET /issues', () => {
  it('should create issue', async () => {
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
