import React from "react";
import { Layout } from "@core/components/layout/layout";
import { useAccount } from "@feats/auth/pages/account/use-account";
import { Form, Formik } from "formik";
import styles from "@feats/auth/pages/account/account.module.scss";
import { FormInput } from "@core/components/inputs/form/form-input";
import { Avatar, Button, GridItem, SimpleGrid, Spacer } from "@chakra-ui/react";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import { ResetButton } from "@core/components/buttons/form/reset-button";
import { FormTextArea } from "@core/components/inputs/form/form-textarea";

export const AccountPage: React.FC = () => {
    const {formik} = useAccount()

    return <Layout page="Account settings">
        <Formik { ...formik }>
            <Form className={ styles.account }>
                <SimpleGrid columns={ {md: 2, sm: 1} } columnGap={ 10 } rowGap={ 4 }>
                    <h3>Profile information</h3>
                    <FormInput label="First name" name="firstName"/>
                    <FormInput label="Last name" name="lastName"/>
                    <FormInput label="Email" name="email"/>
                    <FormInput label="Username" name="username"/>
                    <FormTextArea label="Bio" name="bio" col={2}/> 

                    <h3>Profile image</h3>
                    <GridItem colSpan={{md: 2, sm: 1}} className={styles.profileImage}>
                        <Avatar boxSize={14}/>
                        <Button size="sm">Change</Button>
                    </GridItem>
                    
                    <h3>Security</h3>
                    <FormPasswordInput label="Current Password" name="currentPassword"/>
                    <Spacer/>
                    <FormPasswordInput label="New password" name="password"/>
                    <FormPasswordInput label="Confirm password" name="confirmPassword"/>
                
                    <GridItem colSpan={{md: 2, sm: 1}}>
                        <SubmitButton minW="100px">Save</SubmitButton>
                        <ResetButton minW="100px">Reset</ResetButton>
                    </GridItem>
                </SimpleGrid>
            </Form>
        </Formik>
    </Layout>
}