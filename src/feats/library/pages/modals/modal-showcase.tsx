import React from "react";
import { Button, useBoolean, ModalProps } from "react-untitled-ui";

export type ModalShowcaseProps = {
    children: (props: Pick<ModalProps, "visible" | "toggle">) => React.ReactNode; 
    text: string;
}

export const ModalShowcase: React.FC<ModalShowcaseProps> = (props) => {
    const [visible, {toggle}] = useBoolean()

    return <React.Fragment>
        <Button variant="secondary-gray" onClick={ toggle }>{ props.text }</Button>
        {
            props.children({ visible, toggle }) 
        }
    </React.Fragment>
}