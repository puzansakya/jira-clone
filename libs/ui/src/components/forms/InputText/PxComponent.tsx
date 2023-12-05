import { PxComponentProps } from './interface';
import { usePxInput } from './usePxInput';
import {PxControlledComponent, PxDebouncedControlledComponent} from './PxControlledComponent';
import {PxDebouncedUncontrollerComponent, PxUncontrollerComponent} from './PxUncontrollerComponent';

export const PxComponent = (props: PxComponentProps) => {
  const { control } = usePxInput();

  if (control) {
    return <PxControlledComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};
export const PxDebouncedComponent = (props: PxComponentProps) => {
  const { control } = usePxInput();

  if (control) {
    return <PxDebouncedControlledComponent {...props} />;
  }
  return <PxDebouncedUncontrollerComponent {...props} />;
};
