import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { SidebarSample } from './SidebarSample';

const meta: Meta<typeof SidebarSample> = {
  component: (args) => {
    return (
      <ChakraProvider>
        <SidebarSample {...args} />
      </ChakraProvider>
    );
  },
  title: 'Sidebar',
};
export default meta;

export const Primary = {
  args: {},
};
