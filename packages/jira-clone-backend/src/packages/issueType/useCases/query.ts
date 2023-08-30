import BaseService from '../../../core/BaseService';
import IssueType from '../domain/issueType';

export const query = async (params: any): Promise<any> => {
  const statuses = await BaseService._get_all({
    ...params,
    model: IssueType,
  });

  return {
    data: statuses,
  };
};
