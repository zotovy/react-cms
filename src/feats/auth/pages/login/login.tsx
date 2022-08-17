import React from "react";
import styles from "./login.module.scss"
import { FormInput } from "@core/components/inputs/form/form-input";
import { useLogin } from "@feats/auth/pages/login/use-login";
import { Form, Formik } from "formik";
import { SubmitButton } from "@core/components/buttons/form/submit-button";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";

export const LoginPage: React.FC = () => {
    const {formik} = useLogin()
    
    return <div className={ styles.page }>
        <div className={ styles.inner }>
            <div className={ styles.logo }>
                Logo
            </div>
            <h1>Sign in</h1>
            <p>Welcome back! Enter your email and password below to sign in.</p>

            <Formik { ...formik }>
                <Form>
                    <FormInput label="Email" name="email" placeholder="Enter your email"/>
                    <FormPasswordInput label="Password" name="password" placeholder="Enter your password"/>
                    <SubmitButton>Login</SubmitButton>
                </Form>
            </Formik>

            <p role="note">
                Use admin@gmail.com and 12345 to sign in
            </p>
        </div>
    </div>
}

