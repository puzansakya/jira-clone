import {createBrowserRouter} from 'react-router-dom';

import {RouteEnum} from './routeEnum';

// COMPONENTS
import {ErrorPlaceholder} from 'ui';
import ProjectBoard from '../pages/projectBoard';
import ProjectSetting from '../pages/projectSetting';
import AppShell from '../components/appShell';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        errorElement: <ErrorPlaceholder />,
        children: [
            {
                path: RouteEnum.PROJECTBOARD,
                element: <ProjectBoard />,
                errorElement: <ErrorPlaceholder />,
            },
            {
                path: RouteEnum.PROJECTSETTING,
                element: <ProjectSetting />,
                errorElement: <ErrorPlaceholder />,
            },
        ]
    },
]);
