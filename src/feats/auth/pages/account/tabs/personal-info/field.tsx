import React from "react";
import styles from "./personal-info.module.scss"

export type Props = {
    children?: React.ReactNode;
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
    return <div className={ styles.fields }>{ props.children }</div>
}