import { Flex } from '@chakra-ui/react';
import { PxInputProps } from './interface';
import { PxInputText } from './PxInputText';
import { PxFormControl } from './PxFormControl';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxComponent } from './PxComponent';
import { PxFormErrorLabel } from './PxFormErrorLabel';

export const Default = ({
  name,
  label,
  control,
  errors,
  required,
}: PxInputProps) => {
  if (control) {
    return (
      <PxInputText
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
      </PxInputText>
    );
  }
};
