import React from "react";
import styles from "./components-grid.module.scss";
import classNames from "classnames";

export type ComponentsGridProps = {
    children?: React.ReactNode;
    className?: string;
}

export const ComponentsContainer: React.FC<ComponentsGridProps> = (props) => {
    return <div className={ styles.componentsContainer }>
        { props.children }
    </div>
}

export const ComponentsTitle: React.FC<ComponentsGridProps> = (props) => {
    return <h3 className={ styles.componentsTitle }>
        { props.children }
    </h3>
}

export const ComponentsParagraph: React.FC<ComponentsGridProps> = (props) => {
    return <p className={ styles.componentsParagraph }>
        { props.children }
    </p>
}

export const ComponentsShowcase: React.FC<ComponentsGridProps> = (props) => {
    return <div className={ classNames(styles.componentsShowcase, props.className) }>
        { props.children }
    </div>
}