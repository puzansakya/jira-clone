import FormLabel from '../FormLabel/FormLabel';
import { PxFormLabelProps } from './interface';
import { usePxInput } from './usePxInput';

export const PxFormLabel = (props: PxFormLabelProps) => {
  const { label } = usePxInput();
  return <FormLabel label={`${label}`} {...props} />;
};
