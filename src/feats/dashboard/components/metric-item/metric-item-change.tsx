import { CSSProperties, FC, memo, ReactNode } from "react";
import styles from "./metric-item.module.scss";

export type MetricItemChangeProps = {
    children?: ReactNode,
    color?: CSSProperties["color"]
}

export const MetricItemChange: FC<MetricItemChangeProps> = memo((props) => {
    const color = props.color ?? "var(--untitled-success--500)"

    return <span className={ styles.change } style={ {color} }>
        { props.children }
    </span>
})