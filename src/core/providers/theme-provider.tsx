import { createContext, FC, memo, ReactNode, useEffect, useState } from "react";
import { getDefaultTheme } from "@utils/theme";

export type AppTheme = 'light' | 'dark'

const ThemeContext = createContext<AppTheme>(getDefaultTheme())

export type ThemeProviderProps = {
    children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = memo((props) => {
    const [theme, setTheme] = useState<AppTheme>(getDefaultTheme())

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])
    
    return <ThemeContext.Provider value={ theme }>
        { props.children }
    </ThemeContext.Provider>
})