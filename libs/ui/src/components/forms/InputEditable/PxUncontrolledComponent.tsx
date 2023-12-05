import {
  Editable,
  EditableInput,
  EditablePreview,
  Textarea,
} from '@chakra-ui/react';
import debounce from 'lodash/debounce';
import React from 'react';
import { PxUncontrollerComponentProps } from './interface';
import { usePxInputEditable } from './usePxInputEditable';

export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const { onChangeRHF, value: rhfValue, ...rest } = props;
  const pzContext = usePxInputEditable();

  const { wait = 0, name, value, onChange: _onChange } = pzContext;

  const newVal = value || rhfValue;

  console.log(newVal)
  const [localValue, setLocalValue] = React.useState<string>('');

  // FUNCTIONS
  React.useEffect(() => {
    if (newVal) {
      setLocalValue(newVal);
    }
  }, [newVal]);

  const handleSync = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const debounceCallback = React.useCallback(
    debounce((value) => {
      handleSync?.(value);
    }, wait),
    [wait]
  );

  const handleChange = (data: any) => {
    setLocalValue(data);
    debounceCallback?.(data);
  };

  const inputProps = {
    name,
    value: localValue,
  };

  return (
    <Editable
      onChange={handleChange}
      defaultValue={rhfValue}
      {...inputProps}
      {...rest}
    >
      <EditablePreview
        w="full"
        _hover={{ bg: 'gray.200' }}
        borderRadius="sm"
        p={2}
      />
      <EditableInput
        as={Textarea}
        resize="none"
        overflow="hidden"
        borderRadius="sm"
        appearance="none"
        _focusVisible={{
          outline: 'none',
        }}
        p={2}
        userSelect="none"
        _focus={{
          userSelect: 'none',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        w="full"
      />
    </Editable>
  );
};
