import React from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";

export const Router: React.FC = () => {
    return useRoutes([
        ...routes,
    ])
}