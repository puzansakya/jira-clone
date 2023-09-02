import BaseModel from '../../../core/BaseModel';


export interface IIssueStatus {
    name?: string;
    position?:number
    bg?:string;
    color?:string
}
export default class IssueStatus extends BaseModel implements IIssueStatus {
    name?: string;
    position: number;
    bg?:string;
    color?:string

    static tableName = 'issueStatuses';

}
