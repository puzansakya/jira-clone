import BaseService from '../../../core/BaseService';
import Issue from '../domain/issue';

export const update_position = async (payload: Partial<Issue>) => {
  return BaseService._update({
    Model: Issue,
    payload: payload,
  });
};
