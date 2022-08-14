import React from "react";
import styles from "@core/components/navbar/navbar.module.scss";
import { Moon, Sun } from "react-feather";
import { Button, useColorMode } from "@chakra-ui/react";

export const ThemeButton: React.FC = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return <Button variant="ghost" className={ styles.themeButton } onClick={ toggleColorMode }>
        {
            colorMode === "light"
                ? <Moon color="var(--hint)"/>
                : <Sun color="var(--hint)"/>
        }
    </Button>
}