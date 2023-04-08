import React from 'react';
import { PxInputProps } from './interface';

export const PxInputContext = React.createContext<PxInputProps>({
  label: 'Sample label',
  name: '',
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: '',
  onChange: undefined,
});
PxInputContext.displayName = 'PxInputContext';
