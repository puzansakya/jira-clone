import debounce from "lodash/debounce";
import React, { useState } from "react";
import {Input} from "@chakra-ui/react";

const WAIT = 500;

interface DebouncedinputProps extends Record<string, any> {
  name: any;
  value: any;
  onChange: any;
}

export const DebouncedInput = (props: DebouncedinputProps) => {
  const { value: _value, name, onChange: _onChange, ...rest } = props;

  const [localValue, setLocalValue] = useState("");

  React.useEffect(() => {
    if (_value) {
      setLocalValue(_value);
    }
  }, [_value]);
  const debounceCallback = React.useCallback(
    debounce((newValue: any) => {
      _onChange?.(newValue);
    }, WAIT),
    []
  );

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setLocalValue(value);
    debounceCallback?.(value);
  };

  return (
    <Input
      onChange={handleChange}
      value={localValue}
      {...rest}
    />
  );
};
