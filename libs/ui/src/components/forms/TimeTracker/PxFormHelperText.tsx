import { FormHelperText, FormHelperTextProps } from '@chakra-ui/react';
import { usePxTimeTracker } from './usePxTimeTracker';

export const PxFormHelperText = (props: FormHelperTextProps) => {
  const { required } = usePxTimeTracker();
  if (required) {
    return null;
  }

  return (
    <FormHelperText
      m={0}
      pl="10px"
      color="gray.500"
      fontWeight="300"
      fontSize="14px"
      {...props}
    >
      optional
    </FormHelperText>
  );
};
