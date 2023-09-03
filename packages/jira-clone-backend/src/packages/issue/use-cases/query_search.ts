import Issue from '../domain/issue';

import { isEmpty } from 'lodash';

export const query_search = async (params: any): Promise<any> => {
  console.log({ d: params.search });

  const issueQuery = Issue.query().withGraphFetched('type');

  if (!isEmpty(params.search)) {
    issueQuery.where('description', 'like', '%' + params.search + '%');
    issueQuery.orWhere('descriptionText', 'like', '%' + params.search + '%');
    issueQuery.orWhere('title', 'like', '%' + params.search + '%');
  }

  const issues = await issueQuery;

  return {
    data: issues,
  };
};
