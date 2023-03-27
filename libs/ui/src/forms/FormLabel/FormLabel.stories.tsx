import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { FormLabel } from './FormLabel';

const Story: Meta<typeof FormLabel> = {
  component: (args) => {
    return (
      <ChakraProvider>
        <FormLabel {...args} />
      </ChakraProvider>
    );
  },
  title: 'Forms/FormLabel',
};
export default Story;

export const Default = {
  args: {
    label: 'Asdf',
  },
};
