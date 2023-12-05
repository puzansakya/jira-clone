import React from 'react';
import { PxTimeTrackerContext } from './PxTimeTrackerContext';

export const usePxTimeTracker = () => {
  const context = React.useContext(PxTimeTrackerContext);
  if (context === undefined) {
    throw new Error('usePxTimeTracker must be used within a <PxTimeTracker />');
  }
  return context;
};
