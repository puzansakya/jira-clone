import { Model } from 'objection';

export default class BaseModel extends Model {
  id?: number;
  createdAt?: Date;
  modifiedAt?: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
}
