import React from "react";
import { PreviewHeader } from "@core/components/sections/headers/preview/preview";
import { Layout } from "@core/components/layout/layout";
import {
    ComponentsContainer,
    ComponentsShowcase,
    ComponentsTitle
} from "@feats/library/components/components-container/components-container";
import { ModalShowcase } from "@feats/library/pages/modals/modal-showcase";
import { Button, Modal, ModalActions, ModalIcon, ModalImage, ModalSubtitle, ModalTitle } from "react-untitled-ui";
import { AlertCircle, AlertTriangle, CheckCircle, ArrowLeft, AlignCenter, Smile, ArrowRight } from "react-feather";

export type ModalsProps = {}

export const Modals: React.FC<ModalsProps> = () => {
    return <Layout>
        <PreviewHeader
            badge="Components"
            title="Modals"
            subtitle="A modal is a secondary window that communicates or provides an action inside the same process. They’re incredibly useful for communicating additional information, collecting information, or directing users without forcing them to leave the page. When modals are used unnecessarily, they can become intrusive and annoying for the user. Nobody likes pop-ups."/>

        <ComponentsContainer>
            <ComponentsTitle>
                Variants
            </ComponentsTitle>
            <ComponentsShowcase>
                <ModalShowcase text="Success modal">
                    {
                        (props) => {
                            return <Modal { ...props } align="left">
                                <ModalIcon icon={ CheckCircle } color="success"/>
                                <ModalTitle>Blog post published</ModalTitle>
                                <ModalSubtitle>
                                    This blog post has been published. Team members will be able to edit this post and
                                    republish changes.
                                </ModalSubtitle>
                                <ModalActions>
                                    <Button variant="secondary-gray" onClick={ props.toggle }>Cancel</Button>
                                    <Button variant="primary" onClick={ props.toggle }>Confirm</Button>
                                </ModalActions>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
                <ModalShowcase text="Warning modal">
                    {
                        (props) => {
                            return <Modal { ...props } align="left">
                                <ModalIcon icon={ AlertTriangle } color="warning"/>
                                <ModalTitle>Unsaved changes</ModalTitle>
                                <ModalSubtitle>Do you want to save or discard changes?</ModalSubtitle>
                                <ModalActions>
                                    <Button variant="secondary-gray" onClick={ props.toggle }>Cancel</Button>
                                    <Button variant="primary" onClick={ props.toggle }>Discard</Button>
                                </ModalActions>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
                <ModalShowcase text="Error modal">
                    {
                        (props) => {
                            return <Modal { ...props } align="left">
                                <ModalIcon icon={ AlertCircle } color="error"/>
                                <ModalTitle>Delete blog post</ModalTitle>
                                <ModalSubtitle>Are you sure you want to delete this post? This action cannot be
                                    undone.</ModalSubtitle>
                                <ModalActions>
                                    <Button variant="secondary-gray" onClick={ props.toggle }>Cancel</Button>
                                    <Button variant="primary" error onClick={ props.toggle }>Delete</Button>
                                </ModalActions>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
                <ModalShowcase text="With image modal">
                    {
                        (props) => {
                            return <Modal { ...props } align="center">
                                <ModalImage src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                <ModalTitle>Blog post published</ModalTitle>
                                <ModalSubtitle>
                                    This blog post has been published. Team members will be able to edit this post and republish
                                    changes.
                                </ModalSubtitle>
                                <ModalActions>
                                    <Button variant="secondary-gray" onClick={ props.toggle }>Cancel</Button>
                                    <Button variant="primary" onClick={ props.toggle }>Submit</Button>
                                </ModalActions>
                            </Modal>
                        }
                    }
                </ModalShowcase>
            </ComponentsShowcase>

            <ComponentsTitle>
                Align
            </ComponentsTitle>
            <ComponentsShowcase>
                <ModalShowcase text="Left align">
                    {
                        (props) => {
                            return <Modal { ...props } align="left">
                                
                                <ModalIcon icon={ ArrowLeft } color="primary"/>
                                <ModalTitle>Left align</ModalTitle>
                                <ModalSubtitle>
                                    Use <code>align="left"</code> to align to the left
                                </ModalSubtitle>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
                <ModalShowcase text="Center align">
                    {
                        (props) => {
                            return <Modal { ...props } align="center">

                                <ModalIcon icon={ Smile } color="primary"/>
                                <ModalTitle>Center align</ModalTitle>
                                <ModalSubtitle>
                                    Use <code>align="center"</code> to align to the center
                                </ModalSubtitle>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
                <ModalShowcase text="Right align">
                    {
                        (props) => {
                            return <Modal { ...props } align="right">

                                <ModalIcon icon={ ArrowRight } color="primary"/>
                                <ModalTitle>Right align</ModalTitle>
                                <ModalSubtitle>
                                    Use <code>align="right"</code> to align to the right
                                </ModalSubtitle>
                            </Modal>;
                        }
                    }
                </ModalShowcase>
            </ComponentsShowcase>
        </ComponentsContainer>
    </Layout>
}