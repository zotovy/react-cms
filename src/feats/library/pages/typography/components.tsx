import React from "react";
import styles from "./typography.module.scss";
import classNames from "classnames";

export type FontGroupProps = {
    name: string;
    settings: string;
}

export const FontGroup: React.FC<FontGroupProps> = (props) => {
    return <div className={ styles.fontGroup }>
        <div className={ styles.fontGroupName }>{ props.name }</div>
        <div className={ styles.fontGroupValue }>{ props.settings }</div>
    </div>
}


export type FontShowcaseProps = {
    children: React.ReactNode;
}

export const FontShowcase: React.FC<FontShowcaseProps> = (props) => {
    return <div className={ styles.fontShowcase } data-name={ props.children }>
        <div className={ styles.fontShowcaseItem }>
            <div className={ styles.fontShowcaseName }>{ props.children }</div>
            <div className={ styles.fontShowcaseValue}>Normal</div>
        </div>
        <div className={ classNames(styles.fontShowcaseItem, styles.medium) }>
            <div className={ styles.fontShowcaseName }>{ props.children }</div>
            <div className={ styles.fontShowcaseValue}>Medium</div>
        </div>
        <div className={ classNames(styles.fontShowcaseItem, styles.semibold) }>
            <div className={ styles.fontShowcaseName }>{ props.children }</div>
            <div className={ styles.fontShowcaseValue}>Semibold</div>
        </div>
        <div className={ classNames(styles.fontShowcaseItem, styles.bold) }>
            <div className={ styles.fontShowcaseName }>{ props.children }</div>
            <div className={ styles.fontShowcaseValue}>Bold</div>
        </div>
    </div>
}