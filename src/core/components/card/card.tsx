import { FC, memo, ReactNode } from "react";
import styles from "./card.module.scss";
import classNames from "classnames"

export type CardProps = {
    children?: ReactNode,
    className?: string;
}

export const Card: FC<CardProps> = memo(props => {
    return <div className={ classNames(styles.card, props.className) }>
        { props.children }
    </div>
})