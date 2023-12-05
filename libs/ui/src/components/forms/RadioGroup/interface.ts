import { FormHelperTextProps, FormLabelProps, TextProps } from "@chakra-ui/react";

export type PxFormLabelProps = FormLabelProps;

export type PxFormHelperTextProps = FormHelperTextProps;

export interface PxRadioGroupProps extends Record<string, any> {
    children?: React.ReactNode;
    name: string;
    label: React.ReactNode;
    control?: any;
    errors?: any;
    required?: boolean;
    rule?: any;
    options: any[];
    value?: any;
    onChange?: any;
    components?: any;
}

export type PxFormErrorLabelProps = TextProps;
// export type PxControlledComponentProps = InputProps;

export interface PxBaseComponentProps extends Record<string, any> {
    onChangeRHF?: any;
    value?: any;
}

export type PxComponentProps = PxBaseComponentProps
export type PxUncontrollerComponentProps = PxBaseComponentProps
