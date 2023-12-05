import {
  PxIssueTypeRhfComponent,
  PxPriorityRhfComponent,
  PxReporterRhfComponent,
  PxRhfComponent,
  PxStatusRhfComponent,
} from './PxRhfComponent';
import {
  PxPriorityUncontrollerComponent,
  PxReporterUncontrollerComponent,
  PxStatusUncontrollerComponent,
  PxUncontrollerComponent,
} from './PxUncontrollerComponent';
import { usePxSelect } from './usePxSelect';

export const PxComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = usePxSelect();

  if (control) {
    return <PxRhfComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};

export const PxStatusComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = usePxSelect();

  if (control) {
    return <PxStatusRhfComponent {...props} />;
  }
  return <PxStatusUncontrollerComponent {...props} />;
};

export const PxPriorityComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = usePxSelect();

  if (control) {
    return <PxPriorityRhfComponent {...props} />;
  }
  return <PxPriorityUncontrollerComponent {...props} />;
};


export const PxIssueTypeComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = usePxSelect();

  if (control) {
    return <PxIssueTypeRhfComponent {...props} />;
  }
  return <PxIssueTypeComponent {...props} />;
};


export const PxReporterComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = usePxSelect();

  if (control) {
    return <PxReporterRhfComponent {...props} />;
  }
  return <PxReporterUncontrollerComponent {...props} />;
};
