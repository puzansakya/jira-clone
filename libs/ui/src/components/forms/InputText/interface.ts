import { InputProps, FormControlProps, FormHelperTextProps, FormLabelProps, TextProps } from "@chakra-ui/react";

export interface PxConnectFormProps {
    children: any;
}

export interface PxFormProviderProps {
    defaultValues?: Record<string, any>;
    children?: React.ReactNode;
    onSubmit?: any;
    showDevTool?: boolean;
}

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
}

export type PxFormControlProps = FormControlProps;

export type PxFormHelperTextProps = FormHelperTextProps;

export type PxFormLabelProps = FormLabelProps;

export interface PxComponentProps extends InputProps {
    onChangeRHF?: any;
}

export interface PxUncontrollerComponentProps extends InputProps {
    onChangeRHF?: any;
}

export type PxControlledComponentProps = InputProps;


export type PxFormErrorLabelProps = TextProps;
