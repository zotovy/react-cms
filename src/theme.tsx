import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode("white", "#171822")(props),
            }
        }),
    },
    colors: {
        blue: {
            600: "#175FFB"
        }
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg: "var(--contrast)",
                    color: "white",
                    _hover: {
                        bg: "var(--contrastHover)",
                        _disabled: {
                            bg: "var(--contrast)",
                        }
                    },
                }
            }
        }
    }
})

export const primaryColors =[
    "#FCFAFF",
    "#F9F5FF",
    "#F4EBFF",
    "#E9D7FE",
    "#D6BBFB",
    "#B692F6",
    "#9E77ED",
    "#7F56D9",
    "#6941C6",
    "#53389E",
    "#42307D",
]