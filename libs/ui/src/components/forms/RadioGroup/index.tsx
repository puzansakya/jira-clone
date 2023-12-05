import { PxRadioGroupProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxDefault } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import PxRadioGroup from './PxRadioGroup';

export const RadioGroup = (props: PxRadioGroupProps) => {
  return <PxRadioGroup {...props} />;
};

RadioGroup.Default = PxDefault;
RadioGroup.FormLabel = PxFormLabel;
RadioGroup.HelperText = PxFormHelperText;
RadioGroup.ErrorLabel = PxFormErrorLabel;
RadioGroup.FormControl = PxFormControl;
RadioGroup.Component = PxComponent;

export default RadioGroup;
