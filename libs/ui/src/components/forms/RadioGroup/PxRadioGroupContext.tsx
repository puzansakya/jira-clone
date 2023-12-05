import React from 'react';
import { PxRadioGroupProps } from './interface';
import { Box, HStack } from '@chakra-ui/react';
export const PxRadioGroupContext = React.createContext<PxRadioGroupProps>({
  label: 'Sample label',
  name: '',
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: '',
  onChange: undefined,
  options: [],
  components: { wrapper: HStack, item: Box },
});
PxRadioGroupContext.displayName = 'PxRadioGroupContext';
