import React from 'react';
import { PxInputSelectContext } from './PxInputSelectContext';

export const usePxSelect = () => {
  const context = React.useContext(PxInputSelectContext);
  if (context === undefined) {
    throw new Error('usePxSelect must be used within a <InputEditor />');
  }
  return context;
};
