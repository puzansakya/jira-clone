import { Model } from 'objection';
import BaseModel from '../../../core/BaseModel';
import IssuePriority from '../../issuePriority/domain/issuePriority';
import IssueStatus from '../../issueStatus/domain/issueStatus';
import IssueType from '../../issueType/domain/issueType';
import Project from '../../project/domain/project';
import User from '../../user/domain/user';

export default class Issue extends BaseModel {
    name?: string;
    listPosition?: number;
    description?: string;
    descriptionText?: string;
    estimate?: number;
    timeSpent?: number;
    timeRemaining?: number;

    typeId?: number;
    statusId?: number;
    priorityId?: number;
    reporterId?: number;
    projectId?: number;

    static tableName = 'issues';

    static relationMappings = {
        project: {
            relation: Model.BelongsToOneRelation,
            modelClass: Project,
            join: {
                from: 'issues.projectId',
                to: 'projects.id'
            }
        },
        type: {
            relation: Model.BelongsToOneRelation,
            modelClass: IssueType,
            join: {
                from: 'issues.typeId',
                to: 'issueTypes.id'
            }
        },
        status: {
            relation: Model.BelongsToOneRelation,
            modelClass: IssueStatus,
            join: {
                from: 'issues.statusId',
                to: 'issueStatuses.id'
            }
        },
        priority: {
            relation: Model.BelongsToOneRelation,
            modelClass: IssuePriority,
            join: {
                from: 'issues.priorityId',
                to: 'issuePriorities.id'
            }
        },
        reporter: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'issues.reporterId',
                to: 'users.id'
            }
        },
    };
}
