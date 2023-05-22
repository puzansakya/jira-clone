import { PxInputEditableProps } from './interface';
import { PxInputEditableContext } from './PxInputEditableContext';

export const PxInputEditable = (props: PxInputEditableProps) => {
  const { children, ...rest } = props;
  return (
    <PxInputEditableContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxInputEditableContext.Provider>
  );
};
