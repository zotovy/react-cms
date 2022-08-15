import { usersRoutes } from "@feats/users/routes";
import { RouteObject } from "react-router-dom";
import { Page404 } from "./404";

export const routes: RouteObject[] = [
    {
        path: "*",
        element: <Page404/>,
    },
            ...usersRoutes,
]