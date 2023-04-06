import { ProjectCategory } from "./project-category";

export interface ProjectSetting {
    _id?: any;
    name: string;
    url: string;
    description: string;
    projectCategory: ProjectCategory | any;
}
