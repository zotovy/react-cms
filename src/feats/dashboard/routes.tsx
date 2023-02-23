import { Route } from "@router/router";
import { Dashboard1 } from "@feats/dashboard/pages/dashboard-1/dashboard-1";

export const dashboardRoutes: Route[] = [
    {
        path: "/apps/dashboard/1",
        authentication: true,
        page: <Dashboard1/>,
    }
]