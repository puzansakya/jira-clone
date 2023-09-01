import BaseService from '../../../core/BaseService';
import Comment from '../domain/comment';
export const update = async (payload: Partial<Comment>) => {
  return await BaseService._update({ Model: Comment, payload });
};
