import React from "react";
import styles from './dashboard-1.module.scss';
import { Layout } from "@core/components/layout/layout";
import { DefaultHeader } from "@core/components/sections/headers/default/default";
import { useSelector } from "react-redux";
import { selectUser } from "@feats/auth/redux/auth/auth-selectors";
import { Button } from "react-untitled-ui";
import { Plus, UploadCloud } from "react-feather";
import { MetricItem1, MetricItem2, MetricItem3 } from "@feats/dashboard/pages/dashboard-1/components";

export const Dashboard1: React.FC = () => {
    const user = useSelector(selectUser)
    
    return <div className={ styles.dashboard }>
        <Layout>
            <DefaultHeader
                title={`Welcome back, ${user?.firstName}`}
                subtitle={"Track, manage and forecast your customers and orders."}>
                <Button
                    trailingIcon={UploadCloud}
                    variant="secondary-gray">
                    Import
                </Button>
                <Button trailingIcon={Plus}>Add</Button>
            </DefaultHeader>
            <div className={styles.metrics}>
                <MetricItem1/>
                <MetricItem2/>
                <MetricItem3/>
            </div>
        </Layout>
    </div>
}