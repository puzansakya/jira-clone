import {PxRhfComponent,} from './PxRhfComponent';
import {PxUncontrolledComponent,} from './PxUncontrolledComponent';
import {usePxTimeTracker} from './usePxTimeTracker';

export const PxComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = usePxTimeTracker();

  if (control) {
    return <PxRhfComponent {...props} />;
  }
  return <PxUncontrolledComponent {...props} />;
};
