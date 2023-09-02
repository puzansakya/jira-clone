import BaseService from '../../../core/BaseService';
import IssueStatus from '../domain/issueStatus';

export const query = async (params: any): Promise<any> => {
    const statuses = await BaseService._get_all({
        ...params,
        model: IssueStatus,
    })

    return {
        data: statuses
    }
}
