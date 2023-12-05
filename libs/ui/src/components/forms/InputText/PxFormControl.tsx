import { FormControl, FormControlProps } from '@chakra-ui/react';
import { usePxInput } from './usePxInput';

export const PxFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name } = usePxInput();

  return (
    <FormControl
      id={name}
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      isRequired={false}
      {...rest}
    >
      {children}
    </FormControl>
  );
};
