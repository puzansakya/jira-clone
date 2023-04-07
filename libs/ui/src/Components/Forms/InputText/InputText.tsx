import { Component } from 'react';
import CustomControllerComponent from './CustomControllerComponent';
import CustomFormControl from './CustomFormControl';
import CustomFormErrorLabel from './CustomFormErrorLabel';
import CustomFormHelperText from './CustomFormHelperText';
import CustomFormLabel from './CustomFormLabel';
import Default from './Default';
import { InputTextContext } from './InputTextContext';
import * as fromHelpers from '../../../Helpers';

// 2.
export const InputText = (props: any) => {
  const {
    label,
    control,
    ignoreControl,
    required = false,
    showOptionalLabel,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    children,
    ...rest
  } = props;
  const errorxx =
    errorMessage ||
    (errors &&
      fromHelpers.resolveObjectValueByPath(errors, props.name)?.message);

  return (
    <InputTextContext.Provider
      value={{
        label,
        control,
        ignoreControl,
        required,
        showOptionalLabel,
        errors,
        rule,
        width,
        customLabel,
        labelPosition,
        errorMessage,
        ...rest,
      }}
    >
      {children}
    </InputTextContext.Provider>
  );
};
InputText.Default = Default;
InputText.FormLabel = CustomFormLabel;
InputText.HelperText = CustomFormHelperText;
InputText.ErrorLabel = CustomFormErrorLabel;
InputText.FormControl = CustomFormControl;
InputText.ControllerComponent = CustomControllerComponent;
InputText.Component = Component;
