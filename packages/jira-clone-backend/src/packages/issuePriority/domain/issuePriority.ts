import BaseModel from '../../../core/BaseModel';

export default class IssuePriority extends BaseModel {
    name?: string;
    icon?: string;

    static tableName = 'issuePriorities';

}
