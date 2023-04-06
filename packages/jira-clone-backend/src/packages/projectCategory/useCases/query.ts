import BaseService from '../../../core/BaseService';
import ProjectCategory from '../domain/projectCategory';

export const query = async (params: any): Promise<any> => {
    return BaseService._get_all_paged({
        ...params,
        model: ProjectCategory,
    })
}
