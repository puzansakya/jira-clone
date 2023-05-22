import React from 'react';
import { PxRadioGroupContext } from './PxRadioGroupContext';

export const usePxRadioGroup = () => {
  const context = React.useContext(PxRadioGroupContext);
  if (context === undefined) {
    throw new Error('usePxRadioGroup must be used within a <PxRadioGroup />');
  }
  return context;
};
