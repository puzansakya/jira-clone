import { Flex } from '@chakra-ui/react';
import { Component } from 'react';
import CustomControllerComponent from './CustomControllerComponent';
import CustomFormControl from './CustomFormControl';
import CustomFormErrorLabel from './CustomFormErrorLabel';
import CustomFormHelperText from './CustomFormHelperText';
import CustomFormLabel from './CustomFormLabel';
import { InputText } from './InputText';

const Default = ({ name, label, control, errors, required }: any) => {
  if (control) {
    return (
      <InputText
        required={required}
        name={name}
        label={label}
        control={control}
        errors={errors}
      >
        <CustomFormControl>
          <Flex gap={2}>
            <CustomFormLabel />
            <CustomFormHelperText />
          </Flex>
          <CustomControllerComponent />
          <CustomFormErrorLabel />
        </CustomFormControl>
      </InputText>
    );
  }

  return (
    <InputText
      required={required}
      name={name}
      label={label}
      control={control}
      errors={errors}
    >
      <CustomFormControl>
        <CustomFormLabel />
        <Component />
      </CustomFormControl>
    </InputText>
  );
};

export default Default;
