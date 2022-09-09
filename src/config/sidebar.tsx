import { SidebarConfig } from "@core/types/layout";
import { Calendar, Hash, Home, User } from "react-feather";
import React from "react";

export const sidebarConfig: SidebarConfig = {
    items: [
        {
            type: "page",
            icon: <Home/>,
            text: "Dashboard",
            url: "#",
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
        },
        {
            type: "page",
            icon: <Calendar/>,
            text: "Calendar",
            url: "/calendar",
        },
        {
            type: "divider"
        },
        {
            type: "page",
            icon: <Hash/>,
            text: "Hashtags",
            url: "/hashtags",
        },
    ],
}