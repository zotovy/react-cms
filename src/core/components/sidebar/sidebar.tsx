import React, { useCallback} from "react";
import styles from "./sidebar.module.scss";
import { NavPage, SidebarConfig } from "@core/types/layout";
import { Divider, Spacer, Tooltip, useColorMode } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { useActiveTab } from "@core/hooks/use-active-tab";
import { useSidebar } from "@core/hooks/use-sidebar";
import { useWindowSize } from "@core/hooks/use-window-size";
import { isMobile } from "@core/utils/ui/breakpoint";

export const Sidebar: React.FC<SidebarConfig> = React.memo((props) => {
    const {isSidebarOpened: open, toggleSidebar: toggle} = useSidebar()
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
                        if (item.type === "divider") return <Divider
                            key={ item.key }
                            bg="var(--chakra-colors-chakra-border-color)"
                            marginY={ 15 }/>

                        return <SidebarItem key={ item.key } item={ item } open={ open }/>
                    })
                }
            </div>
            <Spacer/>
            <div className={ styles.bottom } onClick={ toggle }>
                <ChevronRight size={ 28 }/>
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
