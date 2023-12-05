import debounce from "lodash/debounce";
import React, { useState } from "react";

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
      _onChange?.({ name, value:newValue });
    }, WAIT),
    []
  );

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setLocalValue(value);
    debounceCallback?.(value);
  };

  return (
    <input
      id={name}
      onChange={handleChange}
      value={localValue}
      {...rest}
    />
  );
};
