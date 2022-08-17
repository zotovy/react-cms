import React, { useState } from "react";
import { FormInput, Props as BaseProps } from "@core/components/inputs/form/form-input";
import { Button } from "@chakra-ui/react";
import { Eye, EyeOff } from "react-feather";

type Props = BaseProps

export const FormPasswordInput: React.FC<Props> = React.memo((props) => {
    const [show, setShow] = useState(false)

    const right: React.ReactNode = <EyeButton
        show={ show }
        toggle={ () => setShow(!show) }/>

    return <FormInput { ...props } type={ show ? "text" : "password" } inputRight={ right }/>
})

type EyeButtonProps = {
    show: boolean,
    toggle: () => any,
}

export const EyeButton: React.FC<EyeButtonProps> = React.memo((props) => {
    return <Button variant="unstyled" padding="12.5px" onClick={ props.toggle }>
        { props.show
            ? <EyeOff color="var(--hint)" size={ 15 }/>
            : <Eye color="var(--hint)" size={ 15 }/>
        }
    </Button>
})