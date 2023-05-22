import React from 'react';
import { PxMultiSelectContext } from './PxMultiSelectContext';

export const usePxMultiSelect = () => {
  const context = React.useContext(PxMultiSelectContext);
  if (context === undefined) {
    throw new Error('usePxMultiSelect must be used within a <MultiSelect />');
  }
  return context;
};
