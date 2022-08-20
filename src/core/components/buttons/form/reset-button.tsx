import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

type Props = {
    children: React.ReactNode,
} & ButtonProps

export const ResetButton: React.FC<Props> = (props) => {
    const {isSubmitting} = useFormikContext()
    
    return <Button {...props} disabled={isSubmitting} ml={ 5 } type="reset">
        { props.children }
    </Button>
}