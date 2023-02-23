import React from "react";
import styles from "./metric-item.module.scss";

export type MetricItemValueProps = {
    children?: React.ReactNode
}

export const MetricItemValue: React.FC<MetricItemValueProps> = (props) => {
    return <div className={ styles.value }>
        { props.children }
    </div>
}