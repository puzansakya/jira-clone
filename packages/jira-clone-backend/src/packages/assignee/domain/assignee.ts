import BaseModel from '../../../core/BaseModel';

export default class Assignee extends BaseModel {
    // assignee?: number[];
    userId?: string;
    issueId?: string;

    static tableName = 'assignees';

}
