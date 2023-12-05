import { FormLabelProps } from '@chakra-ui/react';
import FormLabel from '../FormLabel/FormLabel';
import { usePxSelect } from './usePxSelect';

export const PxFormLabel = (props: FormLabelProps) => {
  const { label } = usePxSelect();
  return <FormLabel label={`${label}`} {...props} />;
};
