import React from "react";
import { Layout } from "@core/components/layout/layout";
import styles from "./users-list.module.scss"
import { Button } from "react-untitled-ui";
import { DownloadCloud } from "react-feather";
import { DefaultHeader } from "@core/components/sections/headers/default/default";
import { Filters } from "@feats/users/pages/users-list/filters";
import { UserListContext, useUsersList } from "@feats/users/pages/users-list/use-users-list";

export const UsersList: React.FC = () => {
    const {context} = useUsersList()

    return <UserListContext.Provider value={ context }>
        <Layout className={ styles.usersList }>
            <DefaultHeader
                title="Users list"
                subtitle="Here you can manage all the users of your application.">
                <Button variant="secondary-gray" trailingIcon={ DownloadCloud }>Download as PDF</Button>
                <Button variant="secondary-gray" trailingIcon={ DownloadCloud }>Download as CSV</Button>
            </DefaultHeader>
            <Filters/>
        </Layout>
    </UserListContext.Provider>
}