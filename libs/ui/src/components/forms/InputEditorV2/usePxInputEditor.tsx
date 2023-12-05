import React from 'react';
import { PxInputEditorContext } from './PxInputEditorContext';

export const usePxInputEditor = () => {
  const context = React.useContext(PxInputEditorContext);
  if (context === undefined) {
    throw new Error('useInputEditor must be used within a <InputEditor />');
  }
  return context;
};
