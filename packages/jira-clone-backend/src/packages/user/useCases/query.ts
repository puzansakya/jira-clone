import BaseService from '../../../core/BaseService';
import User from '../domain/user';

export const query = async (params: any): Promise<any> => {
    const users = await BaseService._get_all({
        ...params,
        model: User,
    })

    return {
        data: users
    }
}
