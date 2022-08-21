import * as yup from "yup";
import { createFormik } from "@core/utils/ui/create-formik";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectUser } from "@feats/auth/redux/auth-selectors";
import { updateUser } from "@feats/auth/redux/auth-actions";
import { passwordValidator } from "@core/utils/validations";

export function useAccount() {
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()

    return {
        formik: createFormik({
            onSubmit: async (values, { setFieldValue, setFieldTouched }) => {
                await dispatch(updateUser(values))
                
                setFieldValue("currentPassword", "")
                setFieldTouched("currentPassword", false)
                setFieldValue("password", "")
                setFieldTouched("password", false)
                setFieldValue("confirmPassword", "")
                setFieldTouched("confirmPassword", false)
            },
            initialValues: {
                email: user!.email,
                firstName: user?.firstName ?? "",
                lastName: user?.lastName ?? "",
                username: user?.username ?? "",
                profileImage: user?.profileImage ?? "",
                bio: user?.bio ?? "",
                currentPassword: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: yup.object().shape({
                email: yup.string().email().required("Email is required"),
                firstName: yup.string().required("First name is required"),
                lastName: yup.string().required("Last name is required"),
                username: yup.string(),
                currentPassword: yup.string().trim().notRequired()
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator),
                password: yup.string().trim().notRequired()
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator)
                    .when("password", {
                        is: (value: string) => value?.length > 0,
                        then: rule => rule.notOneOf([
                            yup.ref("currentPassword")], "Password must be different than current password"
                        ),
                    }),
                confirmPassword: yup.string().trim().notRequired()
                    .when("currentPassword", whenPasswordValidator)
                    .when("password", whenPasswordValidator)
                    .when("confirmPassword", whenPasswordValidator)
                    .when("confirmPassword", {
                        is: (value: string) => value?.length > 0,
                        then: rule => rule.oneOf([
                            yup.ref("password")], "Passwords don't match",
                        ),
                    }),
            }, [
                ["currentPassword", "currentPassword"],
                ["currentPassword", "password"],
                ["currentPassword", "confirmPassword"],
                ["password", "currentPassword"],
                ["password", "password"],
                ["password", "confirmPassword"],
                ["confirmPassword", "currentPassword"],
                ["confirmPassword", "password"],
                ["confirmPassword", "confirmPassword"],
            ])
        }),
    }
}

const whenPasswordValidator = {
    is: (value: string) => value?.length > 0,
    then: () => passwordValidator,
}