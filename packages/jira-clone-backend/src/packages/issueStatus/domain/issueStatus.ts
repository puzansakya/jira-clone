import BaseModel from '../../../core/BaseModel';

export default class IssueStatus extends BaseModel {
    name?: string;

    static tableName = 'issueStatuses';

}
