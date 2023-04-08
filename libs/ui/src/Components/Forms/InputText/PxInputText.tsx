import { Default } from './Default';
import { PxInputProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxInputContext } from './PxInputContext';

export const PxInputText = (props: PxInputProps) => {
  const { children, ...rest } = props;
  return (
    <PxInputContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PxInputContext.Provider>
  );
};

PxInputText.Default = Default;
PxInputText.FormLabel = PxFormLabel;
PxInputText.HelperText = PxFormHelperText;
PxInputText.ErrorLabel = PxFormErrorLabel;
PxInputText.FormControl = PxFormControl;
PxInputText.Component = PxComponent;

export default PxInputText;
