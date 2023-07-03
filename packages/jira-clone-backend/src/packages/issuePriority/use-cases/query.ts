import BaseService from '../../../core/BaseService';
import IssuePriority from "../domain/issuePriority";

export const query = async (params: any): Promise<any> => {
    const statuses = await BaseService._get_all({
        ...params,
        model: IssuePriority,
    })

    return {
        data: statuses
    }
}
