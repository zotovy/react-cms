import React from "react";
import styles from "./metric-item.module.scss";

export type MetricItemChangeAndTextProps = {
    children?: React.ReactNode;
}

export const MetricItemChangeAndText: React.FC<MetricItemChangeAndTextProps> = (props) => {
    return <div className={ styles.changeAndText }>
        { props.children }
    </div>
}