import { createFormik } from "@core/utils/ui/create-formik";
import * as yup from "yup"

export function useLogin() {
    return {
        formik: createFormik({
            initialValues: {
                email: "",
                password: ""
            },
            onSubmit: (values) => alert(JSON.stringify(values)),
            validationSchema: yup.object({
                email: yup.string().email("Invalid email").required("Required"),
                password: yup.string().required("Required"),
            })
        })
    }
}