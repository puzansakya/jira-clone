import BaseService from '../../../core/BaseService';
import Comment from '../domain/comment';
export const create = async (payload: Partial<Comment>) => {
  return await BaseService._create(Comment, payload);
};
