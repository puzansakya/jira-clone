import BaseService from '../../../core/BaseService';
import Comment from '../domain/comment';
export const query = async (params: any) => {
  console.log(params);
  return await BaseService._get_all_paged({ model: Comment, ...params });
};
