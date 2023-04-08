import { DevTool } from '@hookform/devtools';
import React from 'react';
import { FormProvider as RHFFormProvider, useForm } from 'react-hook-form';
import { PxFormProviderProps } from './interface';

export const PxFormProvider = (props: PxFormProviderProps) => {
  const { defaultValues, children, showDevTool = false, onSubmit } = props;
  const methods = useForm({ mode: 'all', defaultValues: defaultValues });

  return (
    <RHFFormProvider {...methods}>
      {showDevTool && <DevTool control={methods.control} />}

      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </RHFFormProvider>
  );
};
