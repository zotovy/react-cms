import React from "react";
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputProps,
    InputRightElement
} from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import { InputGroup } from "@chakra-ui/input";

export type Props = {
    label: string,
    name: string,
    helper?: string,
    inputRight?: React.ReactNode,
} & InputProps

export const FormInput: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    const { isSubmitting } = useFormikContext()
    
    return <FormControl isInvalid={!!meta.error && meta.touched}>
        <FormLabel>{ props.helper }</FormLabel>
        <InputGroup>
            <Input { ...field } disabled={isSubmitting} {...props}/>
            { 
                props.inputRight && <InputRightElement>
                    { props.inputRight } 
                </InputRightElement>
            }
        </InputGroup>
        { props.helper && <FormHelperText>{ props.helper }</FormHelperText> }
        <FormErrorMessage>{ meta.error }</FormErrorMessage>
    </FormControl>
})