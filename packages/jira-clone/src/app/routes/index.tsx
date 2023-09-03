import {createBrowserRouter, Navigate} from 'react-router-dom';

import {RouteEnum} from './routeEnum';

// COMPONENTS
import {ErrorPlaceholder} from 'ui';
import ProjectBoard from '../pages/project-board';
import ProjectSetting from '../pages/project-setting';
import IssueDetailPage from '../pages/issue-detail';
import IssueSearchPage from '../pages/issue-search';
import AppShell from '../components/app-shell';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        errorElement: <ErrorPlaceholder />,
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to={RouteEnum.PROJECTBOARD}
                        replace
                    />
                ),
            },
            {
                path: RouteEnum.PROJECTBOARD,
                element: <ProjectBoard />,
                errorElement: <ErrorPlaceholder />,
                children: [
                    {
                        path: `${RouteEnum.ISSUE_DETAIL}/:id`,
                        element: <IssueDetailPage />,
                        errorElement: <ErrorPlaceholder />,
                    },
                    {
                        path: `${RouteEnum.ISSUE_SEARCH}`,
                        element: <IssueSearchPage />,
                        errorElement: <ErrorPlaceholder />,
                    },
                ]
            },

            {
                path: RouteEnum.PROJECTSETTING,
                element: <ProjectSetting />,
                errorElement: <ErrorPlaceholder />,
            },
        ]
    },
]);
