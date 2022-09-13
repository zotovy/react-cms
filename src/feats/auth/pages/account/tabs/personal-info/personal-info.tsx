import React from "react";
import styles from "./personal-info.module.scss"

export type PersonalInfoProps = {}

export const PersonalInfo: React.FC<PersonalInfoProps> = () => {
    return <div className={ styles.personalInfo }>
        Personal info 123
    </div>
}