import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { ProjectSettingForm } from '.';

const Story: Meta<typeof ProjectSettingForm> = {
  component: () => {
    return (
      <ChakraProvider>
        <ProjectSettingForm projectCategoriesOptions={[]} />
      </ChakraProvider>
    );
  },
  title: 'Features/Project Setting/Project Setting Form',
};
export default Story;

export const Default = {
  args: {},
};
