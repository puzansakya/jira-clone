import * as fromHelpers from '../../../Helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import { useInputText } from './useInputText';

const CustomFormErrorLabel = () => {
  const { required, name, errorMessage, errors } = useInputText();

  if (!required) {
    return null;
  }

  const error =
    errorMessage ||
    (errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message);

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};

export default CustomFormErrorLabel;
