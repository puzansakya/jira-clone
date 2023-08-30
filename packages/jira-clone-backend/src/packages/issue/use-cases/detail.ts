import BaseService from '../../../core/BaseService';
import Issue from '../domain/issue';

export const detail = async (params: any): Promise<any> => {
    return await BaseService._get_by_id({
        ...params,
        model: Issue,
    })

}
