import { PxComponentProps } from './interface';
import { PxRhfComponent } from './PxRhfComponent';
import { PxUncontrollerComponent } from './PxUnControlledComponent';
import { usePxRadioGroup } from './usePxRadioGroup';

export const PxComponent = (props: PxComponentProps) => {
  const { control } = usePxRadioGroup();

  if (control) {
    return <PxRhfComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};
