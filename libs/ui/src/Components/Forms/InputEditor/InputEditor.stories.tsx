import type { Meta } from '@storybook/react';
import { InputEditorUsuage } from './InputEditor';

const Story: Meta<typeof InputEditorUsuage> = {
  component: () => <InputEditorUsuage />,
  title: 'Forms/Input Editor',
};
export default Story;

export const Default = {
  args: {},
};
