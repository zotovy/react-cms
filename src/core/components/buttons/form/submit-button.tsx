import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

type Props = {
    children: React.ReactNode,
} & ButtonProps

export const SubmitButton: React.FC<Props> = (props) => {
    const {isSubmitting} = useFormikContext()

    return <Button
        isLoading={ isSubmitting }
        variant='primary'
        type="submit"
        { ...props }>
        { props.children }
    </Button>
}