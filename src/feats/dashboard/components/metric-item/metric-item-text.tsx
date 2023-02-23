import React from "react";
import styles from "./metric-item.module.scss";

export type MetricItemTextProps = {
    children?: React.ReactNode;
}

export const MetricItemText: React.FC<MetricItemTextProps> = (props) => {
    return <div className={ styles.text }>
        { props.children }
    </div>
}