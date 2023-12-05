import {
  PxComponent,
  PxIssueTypeComponent,
  PxPriorityComponent,
  PxReporterComponent,
  PxStatusComponent,
} from './PxComponent';
import { PxDefault } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxSelect } from './PxSelect';

type SelectProps = any;
export const Select = (props: SelectProps) => {
  return <PxSelect {...props} />;
};

Select.Default = PxDefault;
Select.FormLabel = PxFormLabel;
Select.HelperText = PxFormHelperText;
Select.ErrorLabel = PxFormErrorLabel;
Select.FormControl = PxFormControl;
Select.Component = PxComponent;
Select.StatusComponent = PxStatusComponent;
Select.PriorityComponent = PxPriorityComponent;
Select.ReporterComponent = PxReporterComponent;
Select.IssueTypeComponent = PxIssueTypeComponent;

export default Select;
