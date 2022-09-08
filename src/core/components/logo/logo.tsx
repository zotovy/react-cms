import React, { CSSProperties } from "react";
import styles from "./logo.module.scss";

export type LogoProps = {
    size?: CSSProperties["width"] | CSSProperties["height"];
}

export const Logo: React.FC<LogoProps> = React.memo((props) => {
    const {size = 32} = props;

    return <div className={ styles.logo } style={ {width: size, height: size} }>
        <img src="/logo.png" alt="Logo"/>
    </div>
})