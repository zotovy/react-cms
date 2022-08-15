import { RouteObject } from "react-router-dom";
import { UsersList } from "./pages/users-list";

export const usersRoutes: RouteObject[] = [
    {
        path: "/apps/users/list",
        element: <UsersList/>,
    }
]