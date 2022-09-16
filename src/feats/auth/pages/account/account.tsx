import React from "react";
import { Layout } from "@core/components/layout/layout";
import { accountTabs, useAccount } from "@feats/auth/pages/account/use-account";
import styles from "./account.module.scss";
import { Avatar, Badge, Button, Dropdown, Tab, TabList, TabPanel, Tabs } from "react-untitled-ui";
import { fullName } from "@feats/auth/entities";
import { UserPlus } from "react-feather";
import { PersonalInfo } from "@feats/auth/pages/account/tabs/personal-info/personal-info";
import MediaQuery from "react-responsive";
import { Password } from "@feats/auth/pages/account/tabs/password/password";

export const AccountPage: React.FC = () => {
    const hook = useAccount()

    return <Layout variant="full-width">
        <MediaQuery minWidth={ 576 }>
            <header className={ styles.header }>
                <img
                    draggable={ false }
                    className={ styles.gradient }
                    src="/gradient/gradient-1.png" alt=""/>
                <div className={ styles.userContainer }>
                    <Avatar size="lg" className={ styles.avatar }/>
                    <div className={ styles.userContent }>
                        <div className={ styles.userDetails }>
                            <h1>{ fullName(hook.user) }</h1>
                            <span className={ styles.email }>{ hook.user?.email }</span>
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
                    <Tabs onSelect={ hook.setActiveTab }>
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
                            <TabPanel><Password/></TabPanel>
                        </div>
                    </Tabs>
                </div>
            </header>
        </MediaQuery>
        <MediaQuery maxWidth={ 575 }>
            <div className={ styles.mobileContent }>
                <div className={ styles.pageHeader }>
                    <h1>Account</h1>
                    <Dropdown
                        fullWidth
                        onChange={ hook.handleTabChange }
                        value={ accountTabs[hook.activeTab] }
                        options={ accountTabs }/>
                </div>
                <div className={ styles.content }>
                    { hook.activeTab === 0 && <PersonalInfo/> }
                    { hook.activeTab === 1 && <Password/> }
                </div>
            </div>
        </MediaQuery>
    </Layout>
}