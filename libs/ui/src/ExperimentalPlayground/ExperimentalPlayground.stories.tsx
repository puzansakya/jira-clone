import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { ExperimentalPlayground } from './ExperimentalPlayground';

const Story: Meta<typeof ExperimentalPlayground> = {
  component: () => {
    return (
      <ChakraProvider>
        <ExperimentalPlayground />
      </ChakraProvider>
    );
  },
  title: 'ExperimentalPlayground',
};
export default Story;

export const Primary = {
  args: {},
};
