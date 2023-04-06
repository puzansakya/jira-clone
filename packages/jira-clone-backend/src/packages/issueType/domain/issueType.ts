import BaseModel from '../../../core/BaseModel';

export default class IssueType extends BaseModel {
    name?: string;

    static tableName = 'issueTypes';

}
