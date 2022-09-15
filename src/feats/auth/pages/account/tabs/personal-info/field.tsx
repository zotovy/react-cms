import React from "react";
import styles from "./personal-info.module.scss"
import classNames from "classnames";

export type Props = {
    children?: React.ReactNode;
    className?: string;
}

export const Field: React.FC<Props> = (props) => {
    return <div className={ styles.fieldContainer }>
        <div className={ styles.field }>
            { props.children }
        </div>
    </div>
}

export const FieldLabel: React.FC<Props> = (props) => {
    return <div className={ styles.fieldLabel }>{ props.children }</div>
}

export const FieldsContainer: React.FC<Props> = (props) => {
    const className = classNames(
        props.className,
        styles.fields,
    )
    
    return <div className={ className }>{ props.children }</div>
}