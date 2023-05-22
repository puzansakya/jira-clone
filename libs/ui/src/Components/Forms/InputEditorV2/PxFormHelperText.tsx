import React from 'react';
import { FormHelperText } from '@chakra-ui/react';
import { usePxInputEditor } from './usePxInputEditor';

export const PxFormHelperText = () => {
  const { required } = usePxInputEditor();
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
    >
      optional
    </FormHelperText>
  );
};
