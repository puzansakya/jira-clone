import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { TextInput } from './TextInput';

const Story: Meta<typeof TextInput> = {
  component: (args) => (
    <ChakraProvider>
      <TextInput {...args} />
    </ChakraProvider>
  ),
  title: 'Forms/Text Input',
};

export default Story;

export const Default = {
  args: {
    label: 'Name',
    name: 'name',
    value: 'Rick Sanchez',
    ignoreControl: false,
  },
};
