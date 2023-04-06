import type { Meta } from '@storybook/react';
import { ProjectSettingForm } from './ProjectSettingForm';

const Story: Meta<typeof ProjectSettingForm> = {
  component: ProjectSettingForm,
  title: 'Features/Project Setting/Project Setting Form',
};
export default Story;

export const Default = {
  args: {},
};
