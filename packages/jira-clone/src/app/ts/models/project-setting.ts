import { IProjectCategory } from "./project-category";

export interface ProjectSetting {
    _id?: any;
    name: string;
    url: string;
    description: string;
    projectCategory: IProjectCategory | any;
}
