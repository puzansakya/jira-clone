import { PxComponent } from './PxComponent';
import { Default } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxInputEditable } from './PxInputEditable';

export const InputEditable = (props: any) => {
  return <PxInputEditable {...props} />;
};

InputEditable.Default = Default;
InputEditable.FormLabel = PxFormLabel;
InputEditable.HelperText = PxFormHelperText;
InputEditable.ErrorLabel = PxFormErrorLabel;
InputEditable.FormControl = PxFormControl;
InputEditable.Component = PxComponent;

export default InputEditable;
