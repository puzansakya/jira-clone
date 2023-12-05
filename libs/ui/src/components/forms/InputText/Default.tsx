import { Flex } from '@chakra-ui/react';
import { PxInputEditableProps } from './interface';
import { PxInputText } from './PxInputText';
import { PxFormControl } from './PxFormControl';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxComponent } from './PxComponent';
import { PxFormErrorLabel } from './PxFormErrorLabel';

export const Default = (props: PxInputEditableProps) => {
  return (
    <PxInputText {...props}>
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
};
