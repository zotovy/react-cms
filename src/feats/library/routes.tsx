import { Route } from "@router/router";
import { IndexLibrary } from "@feats/library/pages/index";
import { Buttons } from "@feats/library/pages/buttons/buttons";

export const libraryRoutes: Route[] = [
    {
        path: "/apps/components",
        page: <IndexLibrary/>
    },
    {
        path: "/apps/components/buttons",
        page: <Buttons/>
    },
]