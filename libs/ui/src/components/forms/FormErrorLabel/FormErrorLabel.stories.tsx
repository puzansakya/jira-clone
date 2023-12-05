import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { FormErrorLable } from './FormErrorLabel';

const Story: Meta<typeof FormErrorLable> = {
  title: 'Forms/Form Error Lable',
  component: (args) => (
    <ChakraProvider>
      <FormErrorLable {...args} />
    </ChakraProvider>
  ),
};
export default Story;

export const Default = {
  args: {
    message: '',
  },
};
