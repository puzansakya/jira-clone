import { FormControl, FormControlProps } from '@chakra-ui/react';
import { usePxTimeTracker } from './usePxTimeTracker';

export const PxFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name } = usePxTimeTracker();

  return (
    <FormControl
      id={name}
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      {...rest}
      isRequired={false}
    >
      {children}
    </FormControl>
  );
};
