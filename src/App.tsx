import React, { useEffect } from "react";
import { Router } from "./router/router";
import { useNavigate } from "react-router-dom";
import AuthService from "@feats/auth/auth-service";
import { useLocation } from "react-router";

export const App: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            const home = getHomeRoute()
            navigate(home)
        }
    }, [location.pathname, navigate])

    return <Router/>
}

function getHomeRoute(): string {
    if (AuthService.isSignedIn()) return "/apps/users/list"
    return "/login"
}