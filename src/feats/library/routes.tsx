import { Route } from "@router/router";
import { IndexLibrary } from "@feats/library/pages/index";
import { Buttons } from "@feats/library/pages/buttons/buttons";
import { InputsPreview } from "@feats/library/pages/inputs/inputs";

export const libraryRoutes: Route[] = [
    {
        path: "/apps/components",
        page: <IndexLibrary/>
    },
    {
        path: "/apps/components/buttons",
        page: <Buttons/>
    },
    {
        path: "/apps/components/inputs",
        page: <InputsPreview/>
    },
]