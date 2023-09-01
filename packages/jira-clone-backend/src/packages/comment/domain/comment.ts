import { Model } from 'objection';
import BaseModel from '../../../core/BaseModel';
import User from '../../user/domain/user';

export default class Comment extends BaseModel {
  body: string;

  issueId?: number;
  userId?: number;

  static tableName = 'comments';

  static relationMappings = {
    commentBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'comments.userId',
        to: 'users.id',
      },
    },
  };
}
