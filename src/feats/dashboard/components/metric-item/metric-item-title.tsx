import React from "react";
import styles from "./metric-item.module.scss";
import classNames from "classnames";

export type MetricItemTitleProps = {
    title: string;
    children?: React.ReactNode;
}

export const MetricItemTitle: React.FC<MetricItemTitleProps> = props => {
    const className = classNames(
        styles.title,
        {
            [styles.oneSide]: !props.children || React.Children.count(props.children) === 0
        }
    )
    
    return <div className={className}>
        {props.title}
        {props.children}
    </div>
}