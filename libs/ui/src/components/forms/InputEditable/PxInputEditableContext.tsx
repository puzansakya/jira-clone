import React from 'react';
import { PxInputEditableProps } from './interface';

export const PxInputEditableContext = React.createContext<PxInputEditableProps>(
  {
    label: 'Sample label',
    name: '',
    control: undefined,
    errors: undefined,
    required: false,
    rule: undefined,
    value: '',
    onChange: undefined,
    wait: 0,
  }
);
PxInputEditableContext.displayName = 'PxInputEditableContext';
