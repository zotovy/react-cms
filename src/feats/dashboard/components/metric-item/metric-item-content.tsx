import React from "react";
import styles from "./metric-item.module.scss";

export type MetricItemContentProps = {
    children?: React.ReactNode;
}

export const MetricItemContent: React.FC<MetricItemContentProps> = (props) => {
    return <div className={ styles.content }>
        { props.children }
    </div>
}