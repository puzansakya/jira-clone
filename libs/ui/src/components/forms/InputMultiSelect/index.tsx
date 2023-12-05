import { PxComponent } from './PxComponent';
import { PxDefault } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxMultiSelect } from './PxMultiSelect';

type MultiSelectProps = any;
export const MultiSelect = (props: MultiSelectProps) => {
  return <PxMultiSelect {...props} />;
};

MultiSelect.Default = PxDefault;
MultiSelect.FormLabel = PxFormLabel;
MultiSelect.HelperText = PxFormHelperText;
MultiSelect.ErrorLabel = PxFormErrorLabel;
MultiSelect.FormControl = PxFormControl;
MultiSelect.Component = PxComponent;

export default MultiSelect;
