import { extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools";

export const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode("#F9FBFC", "#171822")(props),
                
            }
        }) 
    }
})