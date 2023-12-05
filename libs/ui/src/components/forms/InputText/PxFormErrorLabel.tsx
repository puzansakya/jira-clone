import * as fromHelpers from '../../../helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import { PxFormErrorLabelProps } from './interface';
import { usePxInput } from './usePxInput';

export const PxFormErrorLabel = (props: PxFormErrorLabelProps) => {
  const { name, errors, required } = usePxInput();

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
