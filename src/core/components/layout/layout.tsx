import React, { useMemo } from "react";
import styles from "./layout.module.scss";
import { Sidebar } from "@core/components/sidebar/sidebar";
import { populateUiListWithUniqueKeys } from "@core/utils/ui/populate-ui-list-with-keys";
import { sidebarConfig as config } from "@config/sidebar";
import classNames from "classnames";
import { NavBar } from "@core/components/navbar/navbar";

type Props = {
    className?: string,
    children: React.ReactNode,
    page: string,
}

export const Layout: React.FC<Props> = (props) => {
    const sidebarItems = useMemo(() => populateUiListWithUniqueKeys(config.items), [])

    return <div className={ styles.layout }>
        <Sidebar { ...config } items={ sidebarItems }/>
        <div className={ styles.editView }>
            <NavBar/>
            <h1>{ props.page }</h1>
            <div className={ classNames(styles.content, props.className) }>
                { props.children }
            </div>
        </div>
    </div>
}