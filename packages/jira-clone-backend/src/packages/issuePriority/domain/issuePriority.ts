import BaseModel from '../../../core/BaseModel';

export default class IssuePriority extends BaseModel {
    name?: string;

    static tableName = 'issuePriorities';

}
