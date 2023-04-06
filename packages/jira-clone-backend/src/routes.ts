// ROUTERS
import ProjectCategoryController from "./packages/projectCategory/controller"
import ProjectController from "./packages/project/controller"
import IssueController from "./packages/issue/controller"
import UserController from "./packages/user/controller"

const API_NAMESAPCE = "/api/v1"

export const Routes: any = {

    ["project-category"]: {
        path: `${API_NAMESAPCE}/project-categories`,
        controller: ProjectCategoryController,
    },
    project: {
        path: `${API_NAMESAPCE}/projects`,
        controller: ProjectController,
    },
    issue: {
        path: `${API_NAMESAPCE}/issues`,
        controller: IssueController,
    },
    user: {
        path: `${API_NAMESAPCE}/users`,
        controller: UserController,
    },
}
