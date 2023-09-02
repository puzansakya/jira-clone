import { Input } from '@chakra-ui/react';
import { PxUncontrollerComponentProps } from './interface';
import { usePxInput } from './usePxInput';

export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const { onChangeRHF, ...rest } = props;
  const pzContext = usePxInput();

  const {
    name,
    value, // this is user defined value for uncontrolled component
    onChange: _onChange,
  } = pzContext;

  const handleChange = (e: any) => {
    const { value } = e.target;
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const inputProps = {
    name,
    value,
  };
  return <Input bg={"#f4f5f7"} _hover={{
    bg:"#ebecf0"
  }} onChange={handleChange} {...inputProps} {...rest} />;
};
