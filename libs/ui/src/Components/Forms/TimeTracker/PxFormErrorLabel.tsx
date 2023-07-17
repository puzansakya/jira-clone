import { TextProps } from '@chakra-ui/react';
import * as fromHelpers from '../../../Helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import { usePxTimeTracker } from './usePxTimeTracker';

export const PxFormErrorLabel = (props: TextProps) => {
  const { name, errors, required } = usePxTimeTracker();

  if (!required) {
    return null;
  }

  const error =
    errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py="2px"
      px={1}
      fontSize="14px"
      message={error}
      {...props}
    />
  );
};
