import React from "react";
import styles from "./navbar.module.scss"
import { Menu } from "react-feather";
import { useSidebar } from "@core/hooks/use-sidebar";

export const NavBar: React.FC = () => {
    const { toggleSidebar } = useSidebar()
    
    return <nav className={styles.navbar}>
        <Menu color="var(--hint)" onClick={toggleSidebar}/>
    </nav>
}