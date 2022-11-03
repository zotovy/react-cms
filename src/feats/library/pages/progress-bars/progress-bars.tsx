import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import styles from "./progress-bars.module.scss";
import {
    ComponentsContainer,
} from "@feats/library/components/components-container/components-container";
import { ProgressBar } from "react-untitled-ui";

export type ProgressIndicatorsProps = {}

export const ProgressBars: React.FC<ProgressIndicatorsProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Progress bars"
            subtitle="Progress circles indicate the percentage completed of a task. They can be useful to prompt the user to complete an action or process."/>

        <ComponentsContainer>
            <div className={ styles.progressBarShowcase }>
                <ProgressBar progress={ 1 }/>
                <ProgressBar progress={ 0.9 }/>
                <ProgressBar progress={ 0.8 }/>
                <ProgressBar progress={ 0.7 }/>
                <ProgressBar progress={ 0.6 }/>
                <ProgressBar progress={ 0.5 }/>
                <ProgressBar progress={ 0.4 }/>
                <ProgressBar progress={ 0.3 }/>
                <ProgressBar progress={ 0.2 }/>
                <ProgressBar progress={ 0.1 }/>
                <ProgressBar progress={ 0 }/>
            </div>
        </ComponentsContainer>
    </Layout>
}