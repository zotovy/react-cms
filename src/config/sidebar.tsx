import { SidebarConfig } from "@core/types/layout";
import { Calendar, Hash, Home, User } from "react-feather";
import React from "react";

export const sidebarConfig: SidebarConfig = {
    items: [
        {
            type: "page",
            icon: <Home/>,
            text: "Dashboard",
            url: "/dashboard",
        },
        {
            type: "page",
            icon: <User/>,
            text: "Account settings",
            url: "/account",
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