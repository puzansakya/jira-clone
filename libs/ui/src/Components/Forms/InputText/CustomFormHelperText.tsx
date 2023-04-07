import { FormHelperText } from '@chakra-ui/react';
import { useInputText } from './useInputText';

const CustomFormHelperText = () => {
  const { required } = useInputText();
  if (required) {
    return null;
  }

  return (
    <FormHelperText
      m={0}
      pl="10px"
      color="gray.500"
      fontWeight="300"
      fontSize="14px"
    >
      optional
    </FormHelperText>
  );
};

export default CustomFormHelperText;
