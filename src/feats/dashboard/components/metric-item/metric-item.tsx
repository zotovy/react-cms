import React from "react";
import styles from "./metric-item.module.scss";

export type MetricItemProps = {
    children?: React.ReactNode;
}

export const MetricItem: React.FC<MetricItemProps> = (props) => {
    return <div className={ styles.metricItem }>
        { props.children }
    </div>
}
