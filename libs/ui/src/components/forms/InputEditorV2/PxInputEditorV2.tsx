// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { PxInputEditorContext } from './PxInputEditorContext';

type PxInputEditorV2Props = any;
// 2.
/**
 * @param param0
 * @returns
 */
export const PxInputEditorV2 = (props: PxInputEditorV2Props) => {
  const { children, ...rest } = props;
  return (
    <PxInputEditorContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxInputEditorContext.Provider>
  );
};
