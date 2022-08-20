import React, { useCallback } from "react";
import styles from "./sidebar.module.scss";
import { NavPage, SidebarConfig } from "@core/types/layout";
import { Avatar, AvatarBadge, Divider, Spacer, Tooltip, useColorMode } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useActiveTab } from "@core/hooks/use-active-tab";
import { useSidebar } from "@core/hooks/use-sidebar";
import { useWindowSize } from "@core/hooks/use-window-size";
import { isMobile } from "@core/utils/ui/breakpoint";
import classNames from "classnames";
import { LogOut } from "react-feather";

export const Sidebar: React.FC<SidebarConfig> = React.memo((props) => {
    const {isSidebarOpened: open, toggleSidebar: toggle, user, handleLogout} = useSidebar()
    const {colorMode} = useColorMode()

    return <React.Fragment>
        <div className={ styles.sidebar } data-open={ open } data-dark={ colorMode === "dark" }>
            <div className={ styles.logoItem }>
                T
                <span>Company</span>
            </div>
            <div className={ styles.items }>
                {
                    props.items.map(item => {
                        if (item.type === "divider") return <SidebarDivider key={ item.key }/>

                        return <SidebarItem key={ item.key } item={ item } open={ open }/>
                    })
                }
            </div>
            <Spacer/>
            <SidebarDivider/>
            <div className={ styles.bottom } onClick={ toggle }>
                <Avatar boxSize="32px">
                    <AvatarBadge boxSize='16px' bg='green.500' margin="0 0 1px 3px"/>
                </Avatar>
                <div className={ classNames(styles.user, styles.text) }>
                    <div className={ styles.info }>
                        <div className={ styles.email }>
                            {
                                !user!.firstName && !user!.lastName
                                    ? user!.email
                                    : ` ${user!.firstName} ${ user!.lastName }`
                            }
                        </div>
                        <div className={ styles.role }>
                            { user?.role ?? "" }
                        </div>
                    </div>
                    <div className={ styles.logout } onClick={ handleLogout }>
                        <LogOut size={ 17 }/>
                    </div>
                </div>
            </div>
        </div>
        <div className={ styles.sidebarOverlay } data-open={ open } onClick={ toggle }/>
    </React.Fragment>
})

type SidebarItemProps = {
    item: NavPage,
    open: boolean,
}

const SidebarItem: React.FC<SidebarItemProps> = React.memo((props) => {
    const {colorMode} = useColorMode()
    const active = useActiveTab(props.item.url)
    const screenWidth = useWindowSize()
    const {toggleSidebar} = useSidebar()

    const handleClick = useCallback(() => {
        if (isMobile(screenWidth)) {
            toggleSidebar()
        }
    }, [screenWidth, toggleSidebar])

    return <Tooltip
        label={ props.item.text }
        placement='right'
        bg={ colorMode === "light" ? "var(--hint)" : undefined }
        color={ colorMode === "light" ? "white" : undefined }
        isDisabled={ props.open }
        borderRadius={ 5 }
        boxShadow="none"
        openDelay={ 750 }>
        <Link
            onClick={ handleClick }
            to={ props.item.url }
            className={ styles.item }
            data-active={ active }
            data-dark={ colorMode === "dark" }>
            <div className={ styles.icon }>{ props.item.icon }</div>
            <span className={ styles.text }>{ props.item.text }</span>
        </Link>
    </Tooltip>
})


export const SidebarDivider: React.FC = () => {
    return <Divider
        bg="var(--chakra-colors-chakra-border-color)"
        marginY={ 15 }/>
}