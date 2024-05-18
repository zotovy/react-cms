import { AppTheme } from "@core/providers/theme-provider";

const themes = ['light', 'dark']

export const getDefaultTheme = (): AppTheme => {
    const theme = `${ window?.localStorage?.getItem('theme') }`
    if (themes.includes(theme)) return theme as AppTheme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return 'light'

    return 'dark'
}