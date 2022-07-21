import React from "react";
import {Layout} from "./core/components/layout/layout";
import {SidebarConfig} from "@core/types/layout";
import {Calendar, Hash, Home, User} from "react-feather";

export const App: React.FC = () => {
    return <Layout sidebar={sidebarConfig}>
        <span>123</span>
    </Layout>
}

const sidebarConfig: SidebarConfig = {
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