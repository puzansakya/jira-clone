import { ChakraProvider } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { InputDatePicker } from './InputDatePicker';

// const DatePickerUsuage = () => {
//   return (
//     <ChakraProvider>
//       <DatePicker />
//     </ChakraProvider>
//   );
// };

const Story: Meta<typeof InputDatePicker> = {
  component: () => (
    <ChakraProvider>
      <InputDatePicker />
    </ChakraProvider>
  ),
  title: 'DatePicker',
};
export default Story;

export const Default = {
  args: {},
};

// export default {
//   title: 'Datepicker',
//   component: DatePicker,
// };

// export const Prime = () => {
//   return (
//     <ChakraProvider>
//       <DatePicker />
//     </ChakraProvider>
//   );
// };
