// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { PxTimeTrackerContext } from './PxTimeTrackerContext';

type PxTimeTrackerProps = any;
// 2.

export const PxTimeTracker = (props: PxTimeTrackerProps) => {
  const { children, ...rest } = props;
  return (
    <PxTimeTrackerContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxTimeTrackerContext.Provider>
  );
};
