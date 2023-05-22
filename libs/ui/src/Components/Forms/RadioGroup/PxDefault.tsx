import { Flex } from '@chakra-ui/react';
import { PxRadioGroupProps } from './interface';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import PxRadioGroup from './PxRadioGroup';

export const PxDefault = (props: PxRadioGroupProps) => {
  return (
    <PxRadioGroup {...props}>
      <PxFormControl>
        <Flex gap={2}>
          <PxFormLabel />
          <PxFormHelperText />
        </Flex>
        <PxComponent />
        <PxFormErrorLabel />
      </PxFormControl>
    </PxRadioGroup>
  );
};
