import React from "react";
import styles from "./layout.module.scss";
import { Sidebar } from "@core/components/sidebar/sidebar";
import { sidebarConfig as config } from "@config/sidebar";
import classNames from "classnames";
import { NavBar } from "@core/components/navbar/navbar";

type Props = {
    className?: string,
    children: React.ReactNode,
    page: string,
}

export const Layout: React.FC<Props> = (props) => {
    return <div className={ styles.layout }>
        <Sidebar { ...config } key="core/sidebar"/>
        <div className={ styles.editView }>
            <NavBar/>
            <h1>{ props.page }</h1>
            <div className={ classNames(styles.content, props.className) }>
                { props.children }
            </div>
        </div>
    </div>
}