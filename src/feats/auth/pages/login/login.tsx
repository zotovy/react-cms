import React from "react";
import styles from "./login.module.scss"
import { FormInput } from "@core/components/inputs/form/form-input";
import { useLogin } from "@feats/auth/pages/login/use-login";
import { Form, Formik } from "formik";
import { FormPasswordInput } from "@core/components/inputs/form/form-password-input";
import { Logo } from "@core/components/logo/logo";
import { appConfig } from "@config/app";
import { Button, Checkbox } from "react-untitled-ui";

export const LoginPage: React.FC = () => {
    const {formik, rememberMe, handleRememberMeChange} = useLogin()

    return <div className={ styles.page }>
        <div className={ styles.left }>
            <Logo text/>
            <Formik { ...formik }>
                <Form className={ styles.loginForm }>
                    <h1 className={ styles.formTitle }>Sign in</h1>
                    <span className={ styles.formSubtitle }>
                        Welcome back! Please enter your details
                    </span>
                    <FormInput
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        fullWidth/>
                    <FormPasswordInput
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        fullWidth/>
                    <Checkbox
                        label="Remember me"
                        id="remember-me"
                        value={ rememberMe }
                        onChange={ handleRememberMeChange }/>
                    <Button fullWidth type="submit">Login</Button>
                </Form>
            </Formik>
            <span className={ styles.copyright }>
                { appConfig.copyright }
            </span>
        </div>
        <div className={ styles.right }>
            <img src="/big-logo.png" alt=""/>
        </div>
    </div>
}

