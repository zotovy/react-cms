import React from "react";
import styles from "./sidebar.module.scss";
import { NavigationItem, NavPage, SidebarConfig } from "@core/types/layout";
import { useSidebar } from "@core/hooks/use-sidebar";
import { Logo } from "@core/components/logo/logo";
import { Settings } from "react-feather";
import { Avatar } from "react-untitled-ui";

export const Sidebar: React.FC<SidebarConfig> = React.memo((props) => {
    const {isSidebarOpened: open, toggleSidebar: toggle, user, handleLogout} = useSidebar()

    return <div className={ styles.sidebar } data-open={ open }>
        <div className={ styles.container }>
            <div className={ styles.nav }>
                <div className={ styles.header }>
                    <Logo/>
                </div>
                <div className={ styles.navigation }>
                    {
                        props.items.map((item: NavigationItem) => {
                            if (item.type === "divider") return <SidebarDivider key={ item.key }/>
                            return <SidebarItem key={ item.key } { ...item }/>
                        })
                    }
                </div>
            </div>
            <div className={ styles.footer }>
                <div className={ styles.navigation }>
                    <SidebarItem icon={ <Settings/> } type="page" text="Settings" url="/apps/users/settings"/>
                    <SidebarDivider/>
                    <Avatar className={ styles.avatar } src={ user?.profileImage ?? undefined }/>
                </div>
            </div>
        </div>
    </div>
})

export const SidebarItem: React.FC<NavPage> = React.memo((props) => {
    const {icon: Icon} = props

    return <div className={ styles.navItem }>
        { Icon }
    </div>
})

export const SidebarDivider: React.FC = () => {
    return <div className={ styles.divider }/>
}
