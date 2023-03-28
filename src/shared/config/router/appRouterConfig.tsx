import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from 'pages/ProfilePage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const appRouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths.main,
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePaths.about
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: RoutePaths.profile
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePaths.not_found
    }
}