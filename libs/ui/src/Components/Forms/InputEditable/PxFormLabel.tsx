import FormLabel from '../FormLabel/FormLabel';
import { PxFormLabelProps } from './interface';
import { usePxInputEditable } from './usePxInputEditable';

export const PxFormLabel = (props: PxFormLabelProps) => {
  const { label } = usePxInputEditable();
  return <FormLabel label={`${label}`} {...props} />;
};
