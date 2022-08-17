import React, { useEffect } from "react";
import { Router } from "./router/router";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getHomeRoute } from "./router/routes";

export const App: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(getHomeRoute())
        }
    }, [location.pathname, navigate])

    return <Router/>
}
