import BaseService from '../../../core/BaseService';
import Issue from '../domain/issue';

import IssueStatus from '../../issueStatus/domain/issueStatus';
import { isEmpty } from 'lodash';

export const getMappedData = (issueStatuses: any[], issues: any[]) => {

    const blocksIndexed = issues.reduce(
        (entities: any, issue: { id: any; }) => {
            return {
                ...entities,
                [issue.id]: issue,
            };
        },
        {}
    );


    const columnsIndexed = issueStatuses.reduce(
        (acc: any, curr: { id: any; }) => {
            const blockIds = issues.filter((issue: { statusId: any; }) => {
                return issue.statusId === curr.id
            }).sort((a, b) => {
                return a.listPosition - b.listPosition
            })
                .map((issues: any) => issues.id)

            return {
                ...acc,
                [curr.id]: { ...curr, blockIds },
            };
        },
        {}
    );

    const columnOrder = issueStatuses
        .sort((a: { position: number; }, b: { position: number; }) => {
            return a.position - b.position
        })
        .map((status: { id: any; }) => status.id)

    return {
        blocks: blocksIndexed,
        columns: columnsIndexed,
        columnOrder
    }
}

export const query = async (params: any): Promise<any> => {
    console.log({ d: params.search })
    // const issues = await BaseService._get_all({
    //     ...params,
    //     model: Issue,
    // })
    const issueQuery = Issue.query().withGraphFetched("reporter");
    if (!isEmpty(params.search)) {
        issueQuery.where('description', 'like', '%' + params.search + '%');
        issueQuery.orWhere('descriptionText', 'like', '%' + params.search + '%');
        issueQuery.orWhere('title', 'like', '%' + params.search + '%');
    }

    if (!isEmpty(params.reporterIds)) {
        params.reporterIds.split(",").forEach((id, idx) => {
            if (idx === 0) {
                issueQuery.where('reporterId', id);
            } else {
                issueQuery.orWhere('reporterId', id);
            }
        })
    }

    const issues = await issueQuery

    const issueStatuses = await IssueStatus
        .query()

    const mappedBoardData = getMappedData(issueStatuses, issues,)
    return {
        data: mappedBoardData
    }
}
