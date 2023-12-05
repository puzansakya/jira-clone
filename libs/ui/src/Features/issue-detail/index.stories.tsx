import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import {
  ASSIGNEE_OPTIONS,
  MOCK_FORM_VALUE,
  PRIORITY_OPTIONS,
  REPORTER_OPTIONS,
  STATUS_OPTIONS,
  TYPE_OPTIONS,
} from './default-values';
import { IssueDetail } from '.';

const Story: Meta<typeof IssueDetail> = {
  component: () => {
    return (
      <ChakraProvider>
        <IssueDetail
          comments         = {[]}
          isOpen           = {true}
          statusOptions    = {STATUS_OPTIONS}
          typeOptions      = {TYPE_OPTIONS}
          assigneeOptions  = {ASSIGNEE_OPTIONS}
          reporterOptions  = {REPORTER_OPTIONS}
          priorityOptions  = {PRIORITY_OPTIONS}
          createComment    = {() => null}
          updateComment    = {() => null}
          onClose          = {() => null}
          fetchInitialData = {() => null}
          onFetchDetail    = {() => {
            return new Promise((resolve, reject) => {
              resolve(MOCK_FORM_VALUE);
            });
          }}
          onSubmit={(data: any) => {
            console.log(JSON.stringify(data, null, 2));
          }}
        />
      </ChakraProvider>
    );
  },
  title: 'Features/Issue/ Issue Detail Form',
};
export default Story;

export const Default = {
  args: {},
};
