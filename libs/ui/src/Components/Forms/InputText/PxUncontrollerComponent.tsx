import { Input } from '@chakra-ui/react';
import { PxUncontrollerComponentProps } from './interface';
import { usePxInput } from './usePxInput';

export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const { onChangeRHF, ...rest } = props;
  const pzContext = usePxInput();

  const { name, value, onChange: _onChange } = pzContext;

  const handleChange = (e: any) => {
    const { value } = e.target;
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const inputProps = {
    name,
    value,
  };
  return <Input onChange={handleChange} {...inputProps} {...rest} />;
};
