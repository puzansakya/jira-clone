// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { PxMultiSelectContext } from './PxMultiSelectContext';

type PxMultiSelectProps = any;
// 2.
/**
 * @param param0
 * @returns
 */
export const PxMultiSelect = (props: PxMultiSelectProps) => {
  const { children, ...rest } = props;
  return (
    <PxMultiSelectContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxMultiSelectContext.Provider>
  );
};
