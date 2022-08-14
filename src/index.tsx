import ReactDOM from "react-dom/client";
import React from "react";
import {App} from "./App";
import "@core/styles/globals.scss";
import "@core/styles/normalize.css";
import "@core/styles/chakra.scss";
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";
import { ReduxProvider } from "@redux/provider";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ReduxProvider>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ChakraProvider>
        </ReduxProvider>
    </React.StrictMode>
);