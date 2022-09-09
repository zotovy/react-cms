import React from "react";

export type NavPage = {
    type: "page",
    icon: React.ReactNode,
    text: string,
    url: string,
    children?: SubNavPage[],
}

export type SubNavPage = Omit<NavPage, "type" | "icon" | "children"> & {
    badge?: number,
    online?: boolean,
}

export type NavDivider = {
    type: "divider",
}

export type NavigationItem = (NavPage | NavDivider) & { key?: string }

export type SidebarConfig = {
    items: NavigationItem[],
}

export type NavbarConfig = {
    
}