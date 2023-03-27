import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { TextInput } from './TextInput';

const Story: Meta<typeof TextInput> = {
  component: (args) => (
    <ChakraProvider>
      <TextInput {...args} />
    </ChakraProvider>
  ),
  title: 'Forms/TextInput',
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
