import { SidebarConfig } from "@core/types/layout";
import { Calendar, Hash, Home, User } from "react-feather";
import React from "react";
import { v4 } from "uuid";

export const sidebarConfig: SidebarConfig = {
    items: [
        {
            type: "page",
            icon: <Home/>,
            text: "Dashboard",
            url: "#",
            key: v4(),
            children: [
                {
                    text: "Analytics",
                    url: "/dashboard/analytics",
                },
                {
                    text: "Finance",
                    url: "/dashboard/finance",
                    badge: 10,
                },
                {
                    text: "Sales",
                    url: "/apps/users/list",
                    online: true,
                },
            ]
        },
        {
            type: "page",
            icon: <User/>,
            text: "Account settings",
            url: "/apps/auth/account",
            key: v4(),
        },
        {
            type: "page",
            icon: <Calendar/>,
            text: "Calendar",
            url: "/calendar",
            key: v4(),
        },
        {
            type: "divider",
            key: v4(),
        },
        {
            type: "page",
            icon: <Hash/>,
            text: "Hashtags",
            url: "/hashtags",
            key: v4(),
        },
    ],
}