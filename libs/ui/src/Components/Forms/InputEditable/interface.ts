import { EditableProps, FormHelperTextProps, FormLabelProps, TextProps } from "@chakra-ui/react";

export interface PxInputEditableProps {
    children?: React.ReactNode;
    name: string;
    label: React.ReactNode;
    control?: any;
    errors?: any;
    required?: boolean;
    rule?: any;
    value?: any;
    onChange?: any;
    wait?: number;
}

export type PxEditableProps = EditableProps

export type PxFormLabelProps = FormLabelProps;

export type PxFormHelperTextProps = FormHelperTextProps;

export type PxFormErrorLabelProps = TextProps;

export interface PxComponentProps extends Record<string, any> {
    onChangeRHF?: any;
}

export interface PxUncontrollerComponentProps {
    onChangeRHF?: any;
    value?: any;
}

export type PxControlledComponentProps = any;