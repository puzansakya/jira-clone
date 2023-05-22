// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { PxInputSelectContext } from './PxInputSelectContext';

type PxSelectProps = any;
// 2.
/**
 * @param param0
 * @returns
 */
export const PxSelect = (props: PxSelectProps) => {
  const { children, ...rest } = props;
  return (
    <PxInputSelectContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxInputSelectContext.Provider>
  );
};
