import { usersRoutes } from "@feats/users/routes";
import { RouteObject } from "react-router-dom";
import { Page404 } from "./404/404";
import { authRoutes } from "@feats/auth/routes";

export const routes: RouteObject[] = [
    {
        path: "*",
        element: <Page404/>,
    },
    ...authRoutes,
    ...usersRoutes,
]