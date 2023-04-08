import { PxComponentProps } from './interface';
import { PxControlledComponent } from './PxControlledComponent';
import { PxUncontrollerComponent } from './PxUncontrolledComponent';
import { usePxInputEditable } from './usePxInputEditable';

export const PxComponent = (props: PxComponentProps) => {
  const { control } = usePxInputEditable();

  if (control) {
    return <PxControlledComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};
