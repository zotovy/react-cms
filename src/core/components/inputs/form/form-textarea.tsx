import React from "react";
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel, GridItem,
    InputRightElement, ResponsiveValue, Textarea, TextareaProps
} from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import { InputGroup } from "@chakra-ui/input";

export type Props = {
    label?: string,
    name: string,
    helper?: string,
    inputRight?: React.ReactNode,
    col?: ResponsiveValue<number>,
} & TextareaProps

export const FormTextArea: React.FC<Props> = React.memo((props) => {
    const [field, meta] = useField(props.name);
    const { isSubmitting } = useFormikContext()

    return <GridItem colSpan={props.col ?? 1}>
        <FormControl isInvalid={!!meta.error && meta.touched} className="FormInput">
            { props.label && <FormLabel color="var(--secondary)" fontWeight="400">{ props.label }</FormLabel> }
            <InputGroup>
                <Textarea bg="white" { ...field } disabled={isSubmitting} {...props}/>
                {
                    props.inputRight && <InputRightElement>
                        { props.inputRight }
                    </InputRightElement>
                }
            </InputGroup>
            { props.helper && <FormHelperText>{ props.helper }</FormHelperText> }
            <FormErrorMessage>{ meta.error }</FormErrorMessage>
        </FormControl>
    </GridItem>
})