import React from "react";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { useField } from "formik";

type Props = {
    label: string,
    name: string,
    helper?: string,
} & InputProps

export const FormInput: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    
    return <FormControl isInvalid={!!meta.error && meta.touched}>
        <FormLabel>{ props.helper }</FormLabel>
        <Input { ...field } {...props}/>
        { props.helper && <FormHelperText>{ props.helper }</FormHelperText> }
        <FormErrorMessage>{ meta.error }</FormErrorMessage>
    </FormControl>
})