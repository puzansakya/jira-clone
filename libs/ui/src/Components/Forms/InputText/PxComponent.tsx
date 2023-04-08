import { PxComponentProps } from './interface';
import { usePxInput } from './usePxInput';
import { PxControlledComponent } from './PxControlledComponent';
import { PxUncontrollerComponent } from './PxUncontrollerComponent';

export const PxComponent = (props: PxComponentProps) => {
  const { control } = usePxInput();

  if (control) {
    return <PxControlledComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};
