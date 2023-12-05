import FormLabel from '../FormLabel/FormLabel';
import { PxFormLabelProps } from './interface';
import { usePxRadioGroup } from './usePxRadioGroup';

export const PxFormLabel = (props: PxFormLabelProps) => {
  const { label } = usePxRadioGroup();
  return <FormLabel label={`${label}`} {...props} />;
};
