import { FormHelperText } from '@chakra-ui/react';
import { PxFormHelperTextProps } from './interface';
import { usePxInput } from './usePxInput';

export const PxFormHelperText = (props: PxFormHelperTextProps) => {
  const { required } = usePxInput();
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
