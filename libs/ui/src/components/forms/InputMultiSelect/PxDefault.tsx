import { Flex } from '@chakra-ui/react';
import { PxComponent } from './PxComponent';
import { PxFormControl } from './PxFormControl';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormLabel } from './PxFormLabel';
import { PxMultiSelect } from './PxMultiSelect';

type PxDefaultProps = any;
export const PxDefault = (props: PxDefaultProps) => {
  return (
    <PxMultiSelect {...props}>
      <PxFormControl>
        <Flex gap={2}>
          <PxFormLabel />
          <PxFormHelperText />
        </Flex>
        <PxComponent />
        <PxFormErrorLabel />
      </PxFormControl>
    </PxMultiSelect>
  );
};
