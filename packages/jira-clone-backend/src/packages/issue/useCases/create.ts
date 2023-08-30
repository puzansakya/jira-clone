import Issue from '../domain/issue';

export const create = async (payload: Partial<Issue>) => {
  // bulk delete assignee where issued id
  return await Issue.query().insert(payload);
};
