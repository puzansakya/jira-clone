import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { CreateIssueModal } from '.';
import {
  ISSUE_TYPE_OPTIONS,
  PRIORITY_OPTIONS,
  REPORTER_OPTIONS,
} from './default-values';

const meta: Meta<typeof CreateIssueModal> = {
  title: 'Features/Issue/Create Issue Modal',
};
export default meta;

export const Default = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <CreateIssueModal
          fetchInitialData={() => {
            return null;
          }}
          isOpen={true}
          onClose={() => {
            return;
          }}
          issueTypeOptions={ISSUE_TYPE_OPTIONS}
          reporterOptions={REPORTER_OPTIONS}
          priorityOptions={PRIORITY_OPTIONS}
          onSubmit={(data: any) => {
            console.log(JSON.stringify(data, null, 2));
          }}
        />
      </ChakraProvider>
    );
  },
};
