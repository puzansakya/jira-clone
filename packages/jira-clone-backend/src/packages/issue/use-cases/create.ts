import Assignee from '../../assignee/domain/assignee';
import Issue from '../domain/issue';
import isEmpty from 'lodash/isEmpty';

export const create = async (payload: Partial<Issue>) => {
  const { assignees, ...rest } = payload;
  const issue_created = await Issue.query().insert(rest);

  if (!isEmpty(assignees)) {
    const payload_mapped = assignees.map((assigneeId: string) => {
      return {
        issueId: issue_created.id + '',
        userId: assigneeId,
      };
    });

    await Assignee.query().insertGraph(payload_mapped);
  }

  return issue_created;
};
