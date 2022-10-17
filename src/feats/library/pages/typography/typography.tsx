import React from "react";
import { Layout } from "@core/components/layout/layout";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import {
    ComponentsContainer, 
} from "@feats/library/components/components-container/components-container";
import styles from "./typography.module.scss";
import { FontGroup, FontShowcase } from "@feats/library/pages/typography/components";

export type TypographyProps = {}

export const Typography: React.FC<TypographyProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Foundation"
            title="Typography components"
            subtitle="Design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as accessible as possible for everyone."/>

        <ComponentsContainer>
            <h2 className={ styles.fontName }>Inter</h2>
            <p className={ styles.fontLettersPreview }>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789 !@#$%^&*()
            </p>

            <FontGroup name="Display 2xl"
                       settings="Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Tracking: -2%"/>
            <FontShowcase>Display 2xl</FontShowcase>

            <FontGroup name="Display xl"
                       settings="Font size: 60px / 3.75rem | Line height: 72px / 4.5rem | Tracking: -2%"/>
            <FontShowcase>Display xl</FontShowcase>
            
            <FontGroup name="Display lg"
                       settings="Font size: 48px / 3rem | Line height: 60px / 3.75rem | Tracking: -2%"/>
            <FontShowcase>Display lg</FontShowcase>
            
            <FontGroup name="Display md"
                       settings="Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Tracking: -2%"/>
            <FontShowcase>Display md</FontShowcase>
            
            <FontGroup name="Display sm"
                       settings="Font size: 30px / 1.875rem | Line height: 38px / 2.375rem"/>
            <FontShowcase>Display sm</FontShowcase>
            
            <FontGroup name="Display xs"
                       settings="Font size: 24px / 1.5rem | Line height: 32px / 2rem"/>
            <FontShowcase>Display xs</FontShowcase>

            <FontGroup name="Text xl"
                       settings="Font size: 20px / 1.25rem | Line height: 30px / 1.875rem"/>
            <FontShowcase>Text xl</FontShowcase>

            <FontGroup name="Text lg"
                       settings="Font size: 18px / 1.125rem | Line height: 28px / 1.75rem"/>
            <FontShowcase>Text lg</FontShowcase>

            <FontGroup name="Text md"
                       settings="Font size: 16px / 1rem | Line height: 24px / 1.5rem"/>
            <FontShowcase>Text md</FontShowcase>

            <FontGroup name="Text sm"
                       settings="Font size: 14px / 0.875rem | Line height: 20px / 1.25rem"/>
            <FontShowcase>Text sm</FontShowcase>

            <FontGroup name="Text xs"
                       settings="Font size: 12px / 0.75rem | Line height: 18px / 1.125rem"/>
            <FontShowcase>Text xs</FontShowcase>
        </ComponentsContainer>
    </Layout>
}
