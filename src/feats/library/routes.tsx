import { Route } from "@router/router";
import { IndexLibrary } from "@feats/library/pages/index";

export const libraryRoutes: Route[] = [
    {
        path: "/apps/components",
        page: <IndexLibrary/>
    },
]