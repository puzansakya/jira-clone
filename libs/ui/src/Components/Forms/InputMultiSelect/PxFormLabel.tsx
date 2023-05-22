import { FormLabelProps } from '@chakra-ui/react';
import FormLabel from '../FormLabel/FormLabel';
import { usePxMultiSelect } from './usePxMultiSelect';

export const PxFormLabel = (props: FormLabelProps) => {
  const { label } = usePxMultiSelect();
  return <FormLabel label={`${label}`} {...props} />;
};
