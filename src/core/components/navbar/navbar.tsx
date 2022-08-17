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
import { Menu as MenuIcon } from "react-feather";
import { useNavbar } from "@core/components/navbar/use-navbar";

export const Navbar: React.FC = React.memo(() => {
    const { handleLogout, toggleSidebar, isDark } = useNavbar()

    return <nav className={ styles.navigation } data-dark={ isDark }>
        <div className={ styles.left }>
            <MenuIcon color="var(--hint)" className={ styles.burgerButton } onClick={ toggleSidebar }/>
            <div className={ styles.page }>
                Content
            </div>
        </div>

        <div className={ styles.right }>
            <ThemeButton className={ styles.themeButton }/>

            <Menu>
                <MenuButton>
                    <div className={ styles.user }>
                        <div className={ styles.info }>
                            <span className={ styles.userName }>John Doe</span>
                            <span className={ styles.userRole }>Admin</span>
                        </div>
                        <Avatar boxSize="32px">
                            <AvatarBadge boxSize='16px' bg='green.500' margin="0 0 1px 3px"/>
                        </Avatar>
                    </div>
                </MenuButton>
                <MenuList borderColor="surface">
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </div>
    </nav>
})
