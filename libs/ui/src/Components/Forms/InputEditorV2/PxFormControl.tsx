import React from 'react';
import { FormControl } from '@chakra-ui/react';
import { usePxInputEditor } from './usePxInputEditor';

export const PxFormControl = ({ children }: any) => {
  const { name, required, width } = usePxInputEditor();
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap={2}
      id={name}
      isRequired={required}
      style={{ width }}
    >
      {children}
    </FormControl>
  );
};
