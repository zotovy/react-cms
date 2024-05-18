import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "@core/styles/globals.scss";
import "@core/styles/normalize.css";
import "@core/styles/chakra.scss";
import "@core/styles/forms.scss";
import "@core/styles/colors.scss";
import "react-untitled-ui/dist/cjs/index.css";
import { Providers } from "@components/providers";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Providers>
            <App/>
        </Providers>
    </React.StrictMode>
);