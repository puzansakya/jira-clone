import { Default } from './Default';
import { PxInputEditableProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
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

PxInputEditable.Default = Default;
PxInputEditable.FormLabel = PxFormLabel;
PxInputEditable.HelperText = PxFormHelperText;
PxInputEditable.ErrorLabel = PxFormErrorLabel;
PxInputEditable.FormControl = PxFormControl;
PxInputEditable.Component = PxComponent;

export default PxInputEditable;
