import React from 'react';
import { Input } from '@chakra-ui/react';
import { useInputText } from './useInputText';

interface ComponentProps extends Record<any, any> {
  onChangeRHF?: any;
  value?: any;
}
const Component = ({ onChangeRHF, value, ...propsRest }: ComponentProps) => {
  const { name, onChange2, value: userValue } = useInputText();

  const handleChange = (e: any) => {
    const { value } = e.target;
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <Input
      test-id="text-input"
      value={value || userValue}
      onChange={handleChange}
      w="full"
      bg="white"
      {...propsRest}
    />
  );
};

export default Component;
