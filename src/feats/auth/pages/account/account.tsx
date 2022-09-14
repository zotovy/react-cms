import React from "react";
import { Layout } from "@core/components/layout/layout";
import { useAccount } from "@feats/auth/pages/account/use-account";
import { Form, Formik } from "formik";
import styles from "./account.module.scss";
import { Avatar, Badge, Button, Tab, TabList, TabPanel, Tabs } from "react-untitled-ui";
import { fullName } from "@feats/auth/entities";
import { UserPlus } from "react-feather";
import { PersonalInfo } from "@feats/auth/pages/account/tabs/personal-info/personal-info";

export const AccountPage: React.FC = () => {
    const {formik, user} = useAccount()

    return <Layout variant="full-width">
        <header className={ styles.header }>
            <img
                draggable={ false }
                className={ styles.gradient }
                src="/gradient/gradient-1.png" alt=""/>
            <div className={ styles.userContainer }>
                <Avatar size="lg" className={ styles.avatar }/>
                <div className={ styles.userContent }>
                    <div className={ styles.userDetails }>
                        <h1>{ fullName(user) }</h1>
                        <span className={ styles.email }>{ user?.email }</span>
                    </div>
                    <div className={ styles.userActions }>
                        <Button
                            variant="secondary-gray"
                            trailingIcon={ UserPlus }>
                            Share
                        </Button>
                        <Button>
                            View profile
                        </Button>
                    </div>
                </div>
            </div>
            <div className={ styles.tabs }>
                <Tabs>
                    <TabList>
                        <Tab>Personal info</Tab>
                        <Tab>Password</Tab>
                        <Tab>Team <Badge>4</Badge></Tab>
                        <Tab>Plan</Tab>
                        <Tab>Billing <Badge>4</Badge></Tab>
                        <Tab>Email</Tab>
                        <Tab>Integrations</Tab>
                        <Tab>API</Tab>
                    </TabList>
            
                    <div className={ styles.content }>
                        <TabPanel><PersonalInfo/></TabPanel>
                    </div>
                </Tabs>
            </div>
        </header>

        <Formik { ...formik }>
            <Form className={ styles.account }>

            </Form>
        </Formik>
    </Layout>
}