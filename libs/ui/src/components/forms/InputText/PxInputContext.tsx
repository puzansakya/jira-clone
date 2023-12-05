import React from 'react';
import { PxInputEditableProps } from './interface';

export const PxInputContext = React.createContext<PxInputEditableProps>({
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
