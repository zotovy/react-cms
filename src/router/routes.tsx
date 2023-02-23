import { usersRoutes } from "@feats/users/routes";
import { Page404 } from "./404/404";
import { authRoutes } from "@feats/auth/routes";
import AuthService from "@feats/auth/auth-service";
import { Route } from "./router";
import { libraryRoutes } from "@feats/library/routes";
import { dashboardRoutes } from "@feats/dashboard/routes";

export const routes: Route[] = [
    {
        path: "*",
        page: <Page404/>,
    },
    ...authRoutes,
    ...usersRoutes,
    ...libraryRoutes,
    ...dashboardRoutes,
]

export function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/users/list"
    return "/login"
}