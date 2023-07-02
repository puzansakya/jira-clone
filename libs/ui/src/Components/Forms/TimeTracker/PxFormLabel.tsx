import { FormLabelProps } from '@chakra-ui/react';
import FormLabel from '../FormLabel/FormLabel';
import { usePxTimeTracker } from './usePxTimeTracker';

export const PxFormLabel = (props: FormLabelProps) => {
  const { label } = usePxTimeTracker();
  return <FormLabel label={`${label}`} {...props} />;
};
