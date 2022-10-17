import React, { CSSProperties } from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import styles from "./shadow-and-blurs.module.scss";
import {
    ComponentsContainer,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";

export type ShadowAndBlursProps = {}

export const ShadowAndBlurs: React.FC<ShadowAndBlursProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Foundation"
            title="Shadow & blurs"
            subtitle="Shadows allow you to add depth and realism to designs by positioning elements on a z-axis. While background blurs are often used stylistically in modern UI design, they can be utilized just like shadows and allow you to add depth and realism to designs by positioning elements on a z-axis."/>

        <ComponentsContainer>
            <ComponentsTitle>Shadows</ComponentsTitle>
            <ComponentsShowcase>
                <div className={styles.shadowCard} data-name="xs">xs</div>
                <div className={styles.shadowCard} data-name="sm">sm</div>
                <div className={styles.shadowCard} data-name="md">md</div>
                <div className={styles.shadowCard} data-name="lg">lg</div>
                <div className={styles.shadowCard} data-name="xl">xl</div>
                <div className={styles.shadowCard} data-name="2xl">2xl</div>
                <div className={styles.shadowCard} data-name="3xl">3xl</div>
            </ComponentsShowcase>

            <ComponentsTitle>Blurs</ComponentsTitle>
            <ComponentsShowcase className={styles.blurBg}>
                <div className={styles.blurCard} data-name="sm">sm</div>
                <div className={styles.blurCard} data-name="md">md</div>
                <div className={styles.blurCard} data-name="lg">lg</div>
                <div className={styles.blurCard} data-name="xl">xl</div>
            </ComponentsShowcase>
        </ComponentsContainer>

    </Layout>
}

export type CardProps = {
    color: CSSProperties["backgroundColor"];
    textColor: CSSProperties["color"];
    colorName: string;
    text: string;
    supportText: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return <div className={ styles.card }>
        <div className={ styles.swatch } style={ {backgroundColor: props.color, color: props.textColor} }>
            { props.text }
        </div>
        <div className={ styles.info }>
            <h3 className={ styles.text }>{ props.colorName }</h3>
            <p className={ styles.support }>{ props.supportText }</p>
        </div>
    </div>
}