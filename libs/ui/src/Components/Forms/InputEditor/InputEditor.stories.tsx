import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { InputEditor } from './InputEditor';

const Story: Meta<typeof InputEditor> = {
  component: () => (
    <ChakraProvider>
      <InputEditor />
    </ChakraProvider>
  ),
  title: 'Input Editor',
};
export default Story;

export const Default = {
  args: {},
};
