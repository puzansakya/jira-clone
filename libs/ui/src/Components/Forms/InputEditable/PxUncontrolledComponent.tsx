import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react';
import { PxUncontrollerComponentProps } from './interface';
import { usePxInputEditable } from './usePxInputEditable';

export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const { onChangeRHF, value: rhfValue, ...rest } = props;
  const pzContext = usePxInputEditable();

  const { name, value, onChange: _onChange } = pzContext;

  const handleChange = (data: any) => {
    _onChange?.(name, data);
    onChangeRHF?.(data);
  };

  const inputProps = {
    name,
    value,
  };

  return (
    <Editable
      onChange={handleChange}
      defaultValue={rhfValue}
      {...inputProps}
      {...rest}
    >
      <EditablePreview />
      <EditableInput />
      {/* <Input as={EditableInput} /> */}
    </Editable>
  );
};
