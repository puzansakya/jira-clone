import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { Pagination } from './Pagination';

const Story: Meta<typeof Pagination> = {
  component: (args) => {
    return (
      <ChakraProvider>
        <Pagination {...args} />
      </ChakraProvider>
    );
  },
  title: 'Pagination',
};
export default Story;

export const Default = {
  args: {
    onPageChange: (data: any) => {
      console.log(data);
    },
    totalCount: 6,
    siblingCount: 1,
    currentPage: 1,
    pageSize: 10,
  },
};
