import { createFormik } from "@core/utils/ui/create-formik";
import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@feats/auth/redux/auth-selectors";

export function useAccount() {
    const user = useAppSelector(selectUser)
    
    return {
        formik: createFormik({
            onSubmit: (values) => alert(JSON.stringify(values)),
            initialValues: {
                email: user!.email,
                firstName: user?.firstName ?? "",
                lastName: user?.lastName ?? "",
                username: user?.username ?? "",
                profileImage: user?.profileImage ?? "",
                bio: user?.bio ?? "",
            }
        })
    }
}