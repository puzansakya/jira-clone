import { Model } from 'objection';
import BaseModel from '../../../core/BaseModel';
import ProjectCategory from '../../projectCategory/domain/projectCategory';

export default class Project extends BaseModel {
    name?: string;
    url?: string;
    description?: string;

    static tableName = 'projects';


    static relationMappings = {
        projectCategory: {
            relation: Model.BelongsToOneRelation,
            modelClass: ProjectCategory,
            join: {
                from: 'projects.projectCategoryId',
                to: 'projectCategories.id'
            }
        }
    };
}
