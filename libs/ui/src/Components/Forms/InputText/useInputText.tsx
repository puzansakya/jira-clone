import React from 'react';
import { InputTextContext } from './InputTextContext';

export const useInputText = () => {
  const context = React.useContext(InputTextContext);
  if (context === undefined) {
    throw new Error('useInputText must be used within a <InputEditor />');
  }
  return context;
};
