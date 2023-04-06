import BaseModel from '../../../core/BaseModel';

export default class User extends BaseModel {
    name?: string;
    firstName: string
    lastName: string
    avatar: string

    static tableName = 'users';

}
