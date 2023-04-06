import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RouteEnum } from './routeEnum';

// COMPONENTS
import Error from '../components/error';
import ProjectBoard from '../pages/projectBoard';
import ProjectSetting from '../pages/projectSetting';
import AppShell from '../components/appShell';
// import Error from '../components/error/error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        errorElement: <Error />,
        children: [
            {
                path: RouteEnum.PROJECTBOARD,
                element: <ProjectBoard />,
                errorElement: <Error />,
            },
            {
                path: RouteEnum.PROJECTSETTING,
                element: <ProjectSetting />,
                errorElement: <Error />,
            },
        ]
    },
]);
