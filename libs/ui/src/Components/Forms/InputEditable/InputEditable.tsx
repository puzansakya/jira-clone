// import InputEditable from './PxInputEditable';

// export default InputEditable;

import { Default } from './Default';
import { PxInputEditableProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxInputEditableContext } from './PxInputEditableContext';

export const InputEditable = (props: PxInputEditableProps) => {
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

InputEditable.Default = Default;
InputEditable.FormLabel = PxFormLabel;
InputEditable.HelperText = PxFormHelperText;
InputEditable.ErrorLabel = PxFormErrorLabel;
InputEditable.FormControl = PxFormControl;
InputEditable.Component = PxComponent;

export default InputEditable;
