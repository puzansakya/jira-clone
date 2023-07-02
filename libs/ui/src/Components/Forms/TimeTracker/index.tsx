import {
  PxComponent,
} from './PxComponent';
import { PxDefault } from './PxDefault';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxTimeTracker } from './PxTimeTracker';

type TimeTrackerProps = any;
export const TimeTracker = (props: TimeTrackerProps) => {
  return <PxTimeTracker {...props} />;
};

TimeTracker.Default = PxDefault;
TimeTracker.FormLabel = PxFormLabel;
TimeTracker.HelperText = PxFormHelperText;
TimeTracker.ErrorLabel = PxFormErrorLabel;
TimeTracker.FormControl = PxFormControl;
TimeTracker.Component = PxComponent;

export default TimeTracker;
