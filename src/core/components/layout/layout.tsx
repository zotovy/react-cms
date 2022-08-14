import React, { useMemo } from "react";
import styles from "./layout.module.scss";
import { Sidebar } from "@core/components/sidebar/sidebar";
import { SidebarConfig } from "@core/types/layout";
import { Navbar } from "@core/components/navbar/navbar";
import { populateUiListWithUniqueKeys } from "@core/utils/ui/populate-ui-list-with-keys";

type Props = {
    children: React.ReactNode
    sidebar: SidebarConfig,
}

export const Layout: React.FC<Props> = (props) => {
    const sidebarItems = useMemo(() => populateUiListWithUniqueKeys(props.sidebar.items), [props.sidebar.items])

    return <div className={ styles.layout }>
        <Sidebar { ...props.sidebar } items={ sidebarItems }/>
        <div className={ styles.editView }>
            <Navbar/>
        </div>
    </div>
}