import React, { FC, memo, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import { App } from "../../App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReduxProvider } from "@redux/provider";
import { ThemeProvider } from "@core/providers/theme-provider";

export type ProvidersProps = {
    children?: ReactNode
}

const queryClient = new QueryClient()

export const Providers: FC<ProvidersProps> = memo(() => {
    return <ReduxProvider>
        <ThemeProvider>
            <QueryClientProvider client={ queryClient }>
                <ChakraProvider theme={ theme }>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ChakraProvider>
                <ReactQueryDevtools position="bottom-right" initialIsOpen={ false }/>
            </QueryClientProvider>
        </ThemeProvider>
    </ReduxProvider>
})