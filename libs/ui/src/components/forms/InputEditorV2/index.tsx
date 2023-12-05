import { PxComponent } from './PxComponent';
import { PxDefault } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxInputEditorV2 } from './PxInputEditorV2';

type InputEditorV2Props = any;
export const InputEditorV2 = (props: InputEditorV2Props) => {
  return <PxInputEditorV2 {...props} />;
};

InputEditorV2.Default = PxDefault;
InputEditorV2.FormLabel = PxFormLabel;
InputEditorV2.HelperText = PxFormHelperText;
InputEditorV2.ErrorLabel = PxFormErrorLabel;
InputEditorV2.FormControl = PxFormControl;
InputEditorV2.Component = PxComponent;

export default InputEditorV2;
