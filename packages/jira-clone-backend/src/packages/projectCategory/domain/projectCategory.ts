import BaseModel from '../../../core/BaseModel';

export default class ProjectCategory extends BaseModel {
    name?: string;

    static tableName = 'projectCategories';
}
