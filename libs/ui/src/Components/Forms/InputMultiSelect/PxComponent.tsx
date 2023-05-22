import { PxRhfComponent } from './PxRhfComponent';
import { PxUncontrollerComponent } from './PxUncontrollerComponent';
import { usePxMultiSelect } from './usePxMultiSelect';

export const PxComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = usePxMultiSelect();

  if (control) {
    return <PxRhfComponent {...props} />;
  }
  return <PxUncontrollerComponent {...props} />;
};
