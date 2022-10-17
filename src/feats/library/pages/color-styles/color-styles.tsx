import React, { CSSProperties } from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import styles from "./color-styles.module.scss";
import {
    ComponentsContainer,
    ComponentsParagraph, ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";

export type ColorStylesProps = {}

export const ColorStyles: React.FC<ColorStylesProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Foundation"
            title="Color styles"
            subtitle="Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Base
                <ComponentsParagraph>
                    These are base black and white color styles to quickly swap out if you need to.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="#fff"
                    textColor="black"
                    text="AAA 2.1"
                    colorName="White"
                    supportText="#FFFFFF"/>
                <Card
                    color="black"
                    textColor="white"
                    text="AAA 21:1"
                    colorName="Black"
                    supportText="#000000"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Gray
                <ComponentsParagraph>
                    Gray is a neutral color and is the foundation of the color system. Almost everything in UI design —
                    text, form fields, backgrounds, dividers — are usually gray.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-gray--25)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.84"
                    colorName="25"
                    supportText="#FCFCFD"/>
                <Card
                    color="var(--untitled-gray--50)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.73"
                    colorName="50"
                    supportText="#F9FAFB"/>
                <Card
                    color="var(--untitled-gray--100)"
                    textColor="var(--untitled-gray--500)"
                    text="AA 4.49"
                    colorName="100"
                    supportText="#F2F4F7"/>
                <Card
                    color="var(--untitled-gray--200)"
                    textColor="var(--untitled-gray--500)"
                    text="4.19"
                    colorName="200"
                    supportText="#EAECF0"/>
                <Card
                    color="var(--untitled-gray--300)"
                    textColor="white"
                    text="1.48"
                    colorName="300"
                    supportText="#D0D5DD"/>
                <Card
                    color="var(--untitled-gray--400)"
                    textColor="white"
                    text="2.58"
                    colorName="400"
                    supportText="#98A2B3"/>
                <Card
                    color="var(--untitled-gray--500)"
                    textColor="white"
                    text="AA 4.95"
                    colorName="500"
                    supportText="#667085"/>
                <Card
                    color="var(--untitled-gray--600)"
                    textColor="white"
                    text="AAA 7.65"
                    colorName="600"
                    supportText="#475467"/>
                <Card
                    color="var(--untitled-gray--700)"
                    textColor="white"
                    text="AAA 10.41"
                    colorName="700"
                    supportText="#344054"/>
                <Card
                    color="var(--untitled-gray--800)"
                    textColor="white"
                    text="AAA 14.74"
                    colorName="800"
                    supportText="#1D2939"/>
                <Card
                    color="var(--untitled-gray--900)"
                    textColor="white"
                    text="AAA 17.79"
                    colorName="900"
                    supportText="#101828"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Primary
                <ComponentsParagraph>
                    The primary color is your "brand" color, and is used across all interactive elements such as buttons,
                    links, inputs, etc. This color can define the overall feel and can elicit emotion.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-primary--25)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 6.39"
                    colorName="25"
                    supportText="#FCFAFF"/>
                <Card
                    color="var(--untitled-primary--50)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 6.16"
                    colorName="50"
                    supportText="#F9F5FF"/>
                <Card
                    color="var(--untitled-primary--100)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 5.74"
                    colorName="100"
                    supportText="#F4EBFF"/>
                <Card
                    color="var(--untitled-primary--200)"
                    textColor="var(--untitled-primary--700)"
                    text="AA 4.93"
                    colorName="200"
                    supportText="#E9D7FE"/>
                <Card
                    color="var(--untitled-primary--300)"
                    textColor="white"
                    text="1.70"
                    colorName="300"
                    supportText="#D6BBFB"/>
                <Card
                    color="var(--untitled-primary--400)"
                    textColor="white"
                    text="2.49"
                    colorName="400"
                    supportText="#B692F6"/>
                <Card
                    color="var(--untitled-primary--500)"
                    textColor="white"
                    text="3.33"
                    colorName="500"
                    supportText="#9E77ED"/>
                <Card
                    color="var(--untitled-primary--600)"
                    textColor="white"
                    text="AA 4.96"
                    colorName="600"
                    supportText="#7F56D9"/>
                <Card
                    color="var(--untitled-primary--700)"
                    textColor="white"
                    text="AA 6.63"
                    colorName="700"
                    supportText="#6941C6"/>
                <Card
                    color="var(--untitled-primary--800)"
                    textColor="white"
                    text="AAA 8.67"
                    colorName="800"
                    supportText="#53389E"/>
                <Card
                    color="var(--untitled-primary--900)"
                    textColor="white"
                    text="AAA 10.78"
                    colorName="900"
                    supportText="#42307D"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Error
                <ComponentsParagraph>
                    Error colors are used across error states and in "destructive" actions. They communicate a 
                    destructive/negative action, such as removing a user from your team.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-error--25)"
                    textColor="var(--untitled-error--700)"
                    text="AA 6.4"
                    colorName="25"
                    supportText="#FFFBFA"/>
                <Card
                    color="var(--untitled-error--50)"
                    textColor="var(--untitled-error--700)"
                    text="AA 6.06"
                    colorName="50"
                    supportText="#FEF3F2"/>
                <Card
                    color="var(--untitled-error--100)"
                    textColor="var(--untitled-error--700)"
                    text="AA 5.4"
                    colorName="100"
                    supportText="#FEE4E2"/>
                <Card
                    color="var(--untitled-error--200)"
                    textColor="var(--untitled-error--700)"
                    text="AA 4.56"
                    colorName="200"
                    supportText="#FECDCA"/>
                <Card
                    color="var(--untitled-error--300)"
                    textColor="white"
                    text="1.95"
                    colorName="300"
                    supportText="#FDA29B"/>
                <Card
                    color="var(--untitled-error--400)"
                    textColor="white"
                    text="2.78"
                    colorName="400"
                    supportText="#F97066"/>
                <Card
                    color="var(--untitled-error--500)"
                    textColor="white"
                    text="3.76"
                    colorName="500"
                    supportText="#F04438"/>
                <Card
                    color="var(--untitled-error--600)"
                    textColor="white"
                    text="AA 4.82"
                    colorName="600"
                    supportText="#D92D20"/>
                <Card
                    color="var(--untitled-error--700)"
                    textColor="white"
                    text="AA 6.60"
                    colorName="700"
                    supportText="#B42318"/>
                <Card
                    color="var(--untitled-error--800)"
                    textColor="white"
                    text="AAA"
                    colorName="800"
                    supportText="#912018"/>
                <Card
                    color="var(--untitled-error--900)"
                    textColor="white"
                    text="AAA"
                    colorName="900"
                    supportText="#7A271A"/>
            </ComponentsShowcase>
            
            <ComponentsTitle>
                Warning
                <ComponentsParagraph>
                    Warning colors can communicate that an action is potentially destructive or "on-hold". These colors
                    are commonly used in confirmations to grab the users' attention.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-warning--25)"
                    textColor="var(--untitled-warning--700)"
                    text="AA 5.28"
                    colorName="25"
                    supportText="#FFFCF5"/>
                <Card
                    color="var(--untitled-warning--50)"
                    textColor="var(--untitled-warning--700)"
                    text="AA 5.17"
                    colorName="50"
                    supportText="#FFFAEB"/>
                <Card
                    color="var(--untitled-warning--100)"
                    textColor="var(--untitled-warning--700)"
                    text="AA 4.75"
                    colorName="100"
                    supportText="#FEF0C7"/>
                <Card
                    color="var(--untitled-warning--200)"
                    textColor="var(--untitled-warning--700)"
                    text="4.15"
                    colorName="200"
                    supportText="#FEDF89"/>
                <Card
                    color="var(--untitled-warning--300)"
                    textColor="white"
                    text="1.54"
                    colorName="300"
                    supportText="#FEC84B"/>
                <Card
                    color="var(--untitled-warning--400)"
                    textColor="white"
                    text="1.84"
                    colorName="400"
                    supportText="#FDB022"/>
                <Card
                    color="var(--untitled-warning--500)"
                    textColor="white"
                    text="2.34"
                    colorName="500"
                    supportText="#F79009"/>
                <Card
                    color="var(--untitled-warning--600)"
                    textColor="white"
                    text="AA 3.49"
                    colorName="600"
                    supportText="#DC6803"/>
                <Card
                    color="var(--untitled-warning--700)"
                    textColor="white"
                    text="AA 5.4"
                    colorName="700"
                    supportText="#B54708"/>
                <Card
                    color="var(--untitled-warning--800)"
                    textColor="white"
                    text="AAA"
                    colorName="800"
                    supportText="#93370D"/>
                <Card
                    color="var(--untitled-warning--900)"
                    textColor="white"
                    text="AAA"
                    colorName="900"
                    supportText="#7A2E0E"/>
            </ComponentsShowcase>

            <ComponentsTitle>
                Success
                <ComponentsParagraph>
                    Success colors communicate a positive action, positive trend, or a successful confirmation. If 
                    you're using green as your primary color, it can be helpful to introduce a different hue for your success green.
                </ComponentsParagraph>
            </ComponentsTitle>
            <ComponentsShowcase>
                <Card
                    color="var(--untitled-success--25)"
                    textColor="var(--untitled-success--700)"
                    text="AA 5.31"
                    colorName="25"
                    supportText="#F6FEF9"/>
                <Card
                    color="var(--untitled-success--50)"
                    textColor="var(--untitled-success--700)"
                    text="AA 5.17"
                    colorName="50"
                    supportText="#ECFDF3"/>
                <Card
                    color="var(--untitled-success--100)"
                    textColor="var(--untitled-success--700)"
                    text="AA 4.79"
                    colorName="100"
                    supportText="#D1FADF"/>
                <Card
                    color="var(--untitled-success--200)"
                    textColor="var(--untitled-success--700)"
                    text="4.24"
                    colorName="200"
                    supportText="#A6F4C5"/>
                <Card
                    color="var(--untitled-success--300)"
                    textColor="white"
                    text="1.52"
                    colorName="300"
                    supportText="#6CE9A6"/>
                <Card
                    color="var(--untitled-success--400)"
                    textColor="white"
                    text="1.91"
                    colorName="400"
                    supportText="#32D583"/>
                <Card
                    color="var(--untitled-success--500)"
                    textColor="white"
                    text="2.63"
                    colorName="500"
                    supportText="#12B76A"/>
                <Card
                    color="var(--untitled-success--600)"
                    textColor="white"
                    text="3.74"
                    colorName="600"
                    supportText="#039855"/>
                <Card
                    color="var(--untitled-success--700)"
                    textColor="white"
                    text="AA 5.44"
                    colorName="700"
                    supportText="#027A48"/>
                <Card
                    color="var(--untitled-success--800)"
                    textColor="white"
                    text="AAA"
                    colorName="800"
                    supportText="#05603A"/>
                <Card
                    color="var(--untitled-success--900)"
                    textColor="white"
                    text="AAA"
                    colorName="900"
                    supportText="#054F31"/>
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