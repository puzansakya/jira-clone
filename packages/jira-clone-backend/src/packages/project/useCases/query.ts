import BaseService from '../../../core/BaseService';
import Project from '../domain/project';

export const query = async (params: any): Promise<any> => {
    return BaseService._get_all_paged({
        ...params,
        model: Project,
    })
}
