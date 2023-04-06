import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import Select, { components } from 'react-select';
import { defaultTheme } from 'react-select';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

const { colors } = defaultTheme;

// styled components
const Menu = (props: any) => {
  // const shadow = "hsla(218, 50%, 10%, 0.1)";
  return (
    <Box
      bg="white"
      borderRadius={1}
      boxShadow="md"
      mt={2}
      position="absolute"
      zIndex={2}
      {...props}
    >
      {props.children}
    </Box>
  );
};
const Blanket = (props: any) => (
  <Box
    bottom={0}
    top={0}
    left={0}
    right={0}
    position="fixed"
    zIndex={1}
    {...props}
  >
    {props.children}
  </Box>
);

const Dropdown = ({ children, isOpen, target, onClose }: any) => (
  <Box position="relative">
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </Box>
);
const Svg = (p: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div style={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);

// CUSTOM OPTIONS
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      {props.data.icon === 'up' ? (
        <ArrowUpIcon mr={2} color="red.500" />
      ) : (
        <ArrowDownIcon mr={2} color="green.500" />
      )}
      {props.children}
    </components.Option>
  );
};

const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 250,
  }),
  control: (provided: any) => ({
    ...provided,
    margin: '8px 10px',
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    boxShadow: 'none',
  }),
  option: (provided: any) => ({
    ...provided,
    padding: '8px 18px',
  }),
  menu: () => ({ boxShadow: 'inset 0 0 0 rgba(0, 0, 0, 0.1)' }),
};

export const PriorityDropdown = (props: any) => {
  const { name, value, onChange2, onChangeRHF, options } = props;

  const [state, setState] = useState({
    isOpen: false,
    value: {
      bg: '',
      color: '',
      label: '',
      icon: '',
    },
    controlValue: 'All',
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value?.label,
    }));
  }, [value]);
  const toggleOpen = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };
  const onSelectChange = (value: any) => {
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value.label,
      isOpen: !prev.isOpen,
    }));
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };
  const { isOpen, value: localValue } = state;
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <Button
          size="sm"
          borderRadius="sm"
          bg={localValue?.bg}
          color={localValue?.color}
          onClick={toggleOpen}
          _hover={{ bg: 'unset' }}
          fontWeight="normal"
        >
          {localValue ? (
            <>
              {localValue.icon === 'up' ? (
                <ArrowUpIcon mr={2} color="red.500" />
              ) : (
                <ArrowDownIcon mr={2} color="green.500" />
              )}
              <Text>{localValue.label}</Text>{' '}
            </>
          ) : (
            'Select Priority'
          )}
        </Button>
      }
    >
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          Option,
        }}
        controlShouldRenderValue={false}
        hideSelectedOptions={true}
        closeMenuOnSelect={true}
        isClearable={false}
        menuIsOpen
        onChange={onSelectChange}
        options={options}
        placeholder="Select Filter"
        styles={selectStyles}
        tabSelectsValue={false}
        value={localValue}
      />
    </Dropdown>
  );
};

export default PriorityDropdown;
