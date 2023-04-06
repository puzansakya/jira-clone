import { Avatar, Box, Button, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Select, { components, defaultTheme } from 'react-select';

const { colors } = defaultTheme;

// styled components
const Menu = (props: any) => {
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

// CUSTOM OPTIONS
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <Avatar mr={2} size="xs" name="Kola Tioluwani" src={props.data.src} />
      {props.children}
    </components.Option>
  );
};

export const AssigneeDropdown = (props: any) => {
  const { name, value, onChange2, onChangeRHF, options } = props;

  const [state, setState] = useState({
    isOpen: false,
    value: [],
    controlValue: [],
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value?.map((v: any) => v.label),
    }));
  }, [value]);
  const toggleOpen = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };
  const onSelectChange = (value: any) => {
    // const mappedValue = value.reduce(
    //   (current, value) => `${current}${value.label}, `,
    //   ""
    // );
    setState((prev) => ({
      ...prev,
      value: value,
      controlValue: value,
    }));
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };
  const { isOpen, value: localValue } = state;

  const handleRemove = (value: any) => {
    const filtered = state.value.filter(
      (val: any) => val?.value !== value.value
    );
    setState((prev) => ({
      ...prev,
      value: filtered,
      controlValue: filtered,
    }));
    onChange2?.(name, filtered);
    onChangeRHF?.(filtered);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        localValue && localValue.length ? (
          <Wrap spacing={1}>
            {localValue.map((value: any) => {
              return (
                <WrapItem>
                  <Button
                    borderRadius="sm"
                    size="sm"
                    onClick={() => handleRemove(value)}
                    fontWeight="normal"
                    color="brand.label"
                  >
                    <Avatar
                      mr={2}
                      size="xs"
                      name="Kola Tioluwani"
                      src={value.src}
                    />
                    {value?.label}
                  </Button>
                </WrapItem>
              );
            })}
            <WrapItem>
              <Button
                size="sm"
                borderRadius="sm"
                onClick={toggleOpen}
                bg="transparent"
                color="blue.500"
                fontWeight="normal"
              >
                + Add More
              </Button>
            </WrapItem>
          </Wrap>
        ) : (
          <Button
            size="sm"
            borderRadius="sm"
            onClick={toggleOpen}
            fontWeight="normal"
            color="brand.label"
          >
            Unassigned
          </Button>
        )
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
        isClearable={false}
        menuIsOpen
        isMulti
        closeMenuOnSelect={false}
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

export default AssigneeDropdown;
