import { Route } from "@router/router";
import { IndexLibrary } from "@feats/library/pages/index";
import { Buttons } from "@feats/library/pages/buttons/buttons";
import { InputsPreview } from "@feats/library/pages/inputs/inputs";
import { ButtonGroups } from "@feats/library/pages/button-groups/button-groups";
import { Badges } from "@feats/library/pages/badges/badges";

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
    {
        path: "/apps/components/button-groups",
        page: <ButtonGroups/>
    },
    {
        path: "/apps/components/badges",
        page: <Badges/>
    },
]