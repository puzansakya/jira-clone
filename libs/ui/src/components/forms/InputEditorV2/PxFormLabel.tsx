import React from 'react';
import FormLabel from '../FormLabel/FormLabel';
import { usePxInputEditor } from './usePxInputEditor';

export const PxFormLabel = (props: any) => {
  const { label, customLabel } = usePxInputEditor();
  return <FormLabel label={`${label}`} customLabel={customLabel} {...props} />;
};
