import type { Meta } from '@storybook/react';
import { InputSelectUsuage } from './InputSelect';

const Story: Meta<typeof InputSelectUsuage> = {
  component: (args) => <InputSelectUsuage />,
  title: 'Forms/Input Select',
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
