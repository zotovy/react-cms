import React from "react";
import styles from "./account.module.scss"
import { Layout } from "@core/components/layout/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

export const AccountPage: React.FC = () => {
    return <Layout page="Account" className={styles.account}>
        <Tabs>
            <TabList>
                <Tab>Account</Tab>
                <Tab>Security</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                    Security panel
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Layout>
}