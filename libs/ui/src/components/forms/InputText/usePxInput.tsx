import React from 'react';
import { PxInputContext } from './PxInputContext';

export const usePxInput = () => {
  const context = React.useContext(PxInputContext);
  if (context === undefined) {
    throw new Error('usePxInput must be used within a <PxInputText />');
  }
  return context;
};
