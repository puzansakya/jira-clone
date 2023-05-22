import { TextProps } from '@chakra-ui/react';
import * as fromHelpers from '../../../Helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import { usePxMultiSelect } from './usePxMultiSelect';

export const PxFormErrorLabel = (props: TextProps) => {
  const { name, errors, required } = usePxMultiSelect();

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
