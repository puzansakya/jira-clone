import React from 'react';
import * as fromHelpers from '../../../Helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import { usePxInputEditor } from './usePxInputEditor';

export const PxFormErrorLabel = () => {
  const { required, name, errorMessage, errors } = usePxInputEditor();

  if (!required) {
    return null;
  }

  const error =
    errorMessage ||
    (errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message);

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};
