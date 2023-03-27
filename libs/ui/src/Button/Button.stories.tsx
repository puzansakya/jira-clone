import type { Meta } from '@storybook/react';
import { Button } from './Button';
import { ChakraProvider } from '@chakra-ui/react';

const Story: Meta<typeof Button> = {
  component: () => (
    <ChakraProvider>
      <Button />
    </ChakraProvider>
  ),
  title: 'Button',
};

export default Story;

export const Default = {
  args: {},
};
