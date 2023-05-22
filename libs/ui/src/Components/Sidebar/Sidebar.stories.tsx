import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';

const Story: Meta<typeof Sidebar> = {
  component: (args) => {
    return (
      <ChakraProvider>
        <Sidebar {...args} />
      </ChakraProvider>
    );
  },
  title: 'Sidebar',
};
export default Story;

export const Primary = {
  args: {},
};
