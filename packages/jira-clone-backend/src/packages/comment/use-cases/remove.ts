import BaseService from '../../../core/BaseService';
import Comment from '../domain/comment';
export const remove = async (id: string) => {
  return await BaseService._delete(Comment, id);
};
