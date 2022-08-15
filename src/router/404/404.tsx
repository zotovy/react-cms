import React, { useCallback } from "react";
import styles from "./404.module.scss"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Page404: React.FC = () => {
    const navigate = useNavigate()
    
    const handleClick = useCallback(() => navigate("/"), [navigate]);
    
    return <div className={styles.page404}>
        <h1>404</h1>
        <span>You just hit a route that doesn't exist... the sadness.😢</span>
        <Button onClick={handleClick}>Go home</Button>
    </div>
}