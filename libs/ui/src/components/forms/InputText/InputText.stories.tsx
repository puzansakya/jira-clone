import type { Meta } from '@storybook/react';
import { InputTextUsuage } from './InputTextUsuage';

const Story: Meta<typeof InputTextUsuage> = {
  component: (args) => <InputTextUsuage />,
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
