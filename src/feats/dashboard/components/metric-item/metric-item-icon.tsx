import React from "react";
import { ModalIcon, ModalIconProps } from "react-untitled-ui";
import styles from "./metric-item.module.scss";

export type MetricItemIconProps = ModalIconProps

export const MetricItemIcon: React.FC<MetricItemIconProps> = props => {
    return <ModalIcon { ...props } className={ styles.icon }/>
}