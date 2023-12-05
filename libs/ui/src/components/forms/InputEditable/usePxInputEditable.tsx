import React from 'react';
import { PxInputEditableContext } from './PxInputEditableContext';

export const usePxInputEditable = () => {
  const context = React.useContext(PxInputEditableContext);
  if (context === undefined) {
    throw new Error(
      'usePxInputEditable must be used within a <PxInputEditable />'
    );
  }
  return context;
};
