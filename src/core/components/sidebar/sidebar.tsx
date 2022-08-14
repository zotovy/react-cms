import React from "react";
import styles from "./sidebar.module.scss";
import {SidebarConfig} from "@core/types/layout";
import {Divider, Spacer, Tooltip, useBoolean, useColorMode} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {ChevronRight} from "react-feather";
import classNames from "classnames";


export const Sidebar: React.FC<SidebarConfig> = React.memo((props) => {
    const [open, setOpen] = useBoolean(false)
    const {colorMode} = useColorMode()

    return <div className={classNames(styles.sidebar, {[styles.open]: open})} data-dark={colorMode === "dark"}>
        <div className={styles.logoItem}>
            T
            <span>Company</span>
        </div>
        <div className={styles.items}>
            {
                props.items.map(item => {
                    if (item.type === "divider") return <Divider
                        bg="var(--chakra-colors-chakra-border-color)"
                        marginY={15}/>

                    return <Tooltip
                        label={item.text}
                        placement='right'
                        bg={colorMode === "light" ? "var(--hint)" : undefined}
                        color={colorMode === "light" ? "white" : undefined}
                        isDisabled={open}
                        borderRadius={5}
                        boxShadow="none"
                        openDelay={750}>
                        <Link to={item.url} className={styles.item} data-dark={colorMode === "dark"}>
                            <div className={styles.icon}>{item.icon}</div>
                            <span className={styles.text}>{item.text}</span>
                        </Link>
                    </Tooltip>
                })
            }
        </div>
        <Spacer/>
        <div className={styles.bottom} onClick={setOpen.toggle}>
            <ChevronRight size={28}/>
        </div>
    </div>
})
