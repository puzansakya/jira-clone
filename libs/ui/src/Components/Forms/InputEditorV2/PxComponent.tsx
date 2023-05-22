import { PxControlledComponent } from './PxControlledComponent';
import { PxUncontrolledComponent } from './PxUncontrolledComponent';
import { usePxInputEditor } from './usePxInputEditor';

type PxComponentProps = Record<string, any>;
export const PxComponent = (props: PxComponentProps) => {
  const { control } = usePxInputEditor();

  if (control) {
    return <PxControlledComponent {...props} />;
  }
  return <PxUncontrolledComponent {...props} />;
};
