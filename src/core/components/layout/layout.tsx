import React from "react";
import styles from "./layout.module.scss";
import {Sidebar} from "@core/components/sidebar/sidebar";
import {SidebarConfig} from "@core/types/layout";
import {Navbar} from "@core/components/navbar/navbar";

type Props = {
    children: React.ReactNode
    sidebar: SidebarConfig,
}

export const Layout: React.FC<Props> = (props) => {
    return <div className={styles.layout}>
        <Sidebar {...props.sidebar}/>
        <div className={styles.editView}>
            <Navbar/>
        </div>
    </div>
}