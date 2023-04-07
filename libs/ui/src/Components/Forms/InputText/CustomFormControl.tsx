import { FormControl } from '@chakra-ui/react';
import { useInputText } from './useInputText';

const CustomFormControl = ({ children }: any) => {
  const { name, required, width } = useInputText();
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap={2}
      id={name}
      isRequired={required}
      style={{ width }}
    >
      {children}
    </FormControl>
  );
};
export default CustomFormControl;
