import { RouteObject } from "react-router-dom";
import { LoginPage } from "@feats/auth/pages/login/login";

export const authRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage/>
    }
]