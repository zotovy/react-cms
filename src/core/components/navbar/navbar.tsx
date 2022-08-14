import React from "react";
import styles from "./navbar.module.scss";
import {
    Avatar,
    AvatarBadge,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { ThemeButton } from "@core/components/buttons/theme-button";
import { useDarkMode } from "@core/hooks/use-dark-mode";

export const Navbar: React.FC = () => {
    const isDark = useDarkMode()

    return <nav className={styles.navigation} data-dark={isDark}>
        <div className={styles.page}>
            Content
        </div>
        <div className={styles.right}>
            <ThemeButton/>

            <Menu>
                <MenuButton>
                    <div className={styles.user}>
                        <div className={styles.info}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.userRole}>Admin</span>
                        </div>
                        <Avatar boxSize="32px">
                            <AvatarBadge boxSize='16px' bg='green.500' margin="0 0 1px 3px"/>
                        </Avatar>
                    </div>
                </MenuButton>
                <MenuList borderColor="surface">
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </div>
    </nav>
}
