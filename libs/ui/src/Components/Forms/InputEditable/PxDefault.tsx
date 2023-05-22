// import InputEditable from './PxInputEditable';

// export default InputEditable;

import { Flex } from '@chakra-ui/react';
import { PxInputEditableProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxInputEditable } from './PxInputEditable';

export const Default = ({
  name,
  label,
  control,
  errors,
  required,
}: PxInputEditableProps) => {
  return (
    <PxInputEditable
      required={required}
      name={name}
      label={label}
      control={control}
      errors={errors}
    >
      <PxFormControl>
        <Flex gap={2}>
          <PxFormLabel />
          <PxFormHelperText />
        </Flex>
        <PxComponent />
        <PxFormErrorLabel />
      </PxFormControl>
    </PxInputEditable>
  );
};
