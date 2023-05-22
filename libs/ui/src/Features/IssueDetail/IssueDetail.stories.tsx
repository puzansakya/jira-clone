import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { IssueDetail } from './IssueDetail';

const STATUS_OPTIONS = [
  { value: '1', label: 'Done', bg: 'green.500', color: 'white' },
  {
    value: '2',
    label: 'Backlog',
    bg: 'gray.300',
    color: 'gray.900',
  },
  {
    value: '3',
    label: 'Selected For Development',
    bg: 'gray.300',
    color: 'gray.900',
  },
  {
    value: '4',
    label: 'In Progress',
    bg: 'blue.500',
    color: 'white',
  },
];

const ASSIGNEE_OPTIONS = [
  {
    value: '1',
    label: 'Lord Gaben',
    src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
  {
    value: '2',
    label: 'Baby Yoda',
    src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    value: '3',
    label: 'Pickle Rick',
    src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
];

const PRIORITY_OPTIONS = [
  { value: 'highest', label: 'Highest', icon: 'up' },
  { value: 'high', label: 'High', icon: 'up' },
  { value: 'medium', label: 'Medium', icon: 'up' },
  { value: 'low', label: 'Low', icon: 'down' },
  { value: 'lowest', label: 'Lowest', icon: 'down' },
];

const REPORTER_OPTIONS = [
  {
    value: '1',
    label: 'Lord Gaben',
    src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
  {
    value: '2',
    label: 'Baby Yoda',
    src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    value: '3',
    label: 'Pickle Rick',
    src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
];

const Story: Meta<typeof IssueDetail> = {
  component: () => {
    return (
      <ChakraProvider>
        <IssueDetail
          statusOptions={STATUS_OPTIONS}
          assigneeOptions={ASSIGNEE_OPTIONS}
          reporterOptions={REPORTER_OPTIONS}
          priorityOptions={PRIORITY_OPTIONS}
        />
      </ChakraProvider>
    );
  },
  title: 'Features/Issue Detail/ Issue Detail Form',
};
export default Story;

export const Default = {
  args: {},
};
