import { CSSProperties, FC, memo } from "react";
import styles from "./geopin.module.scss";

export type GeoPinProps = {
    title?: string;
    content?: string;
    x?: CSSProperties["left"],
    y?: CSSProperties["top"],
}

export const GeoPin: FC<GeoPinProps> = memo((props) => {
    return <div className={ styles.pin } style={{ left: props.x, top: props.y }}>
        <div className={ styles.container }>
            <div className={ styles.marker }>
                <div className={ styles.dot }/>
            </div>
            <div className={ styles.tooltip }>
               <div className={styles.content}>
                   { props.title && <span className={ styles.title }>{ props.title }</span> }
                   { props.content && <span className={ styles.subtitle }>{ props.content }</span> }
               </div>
            </div>
        </div>
    </div>
})