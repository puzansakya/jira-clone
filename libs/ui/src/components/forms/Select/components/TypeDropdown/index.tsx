import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import Select, { components } from 'react-select';
import { Dropdown } from '../common/Dropdown';
import { DropdownIndicator } from '../common/DropdownIndicator';
import { Case, Default, Switch } from 'react-if';
import {
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsFillExclamationOctagonFill,
} from 'react-icons/bs';

// CUSTOM OPTIONS
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <Flex gap={2}>
        <Switch>
          <Case condition={props.data.label?.toLowerCase() === 'story'}>
            <BsFillCheckSquareFill size="16px" color="#4fade6" />
          </Case>
          <Case condition={props.data.label.toLowerCase() === 'bug'}>
            <BsFillExclamationOctagonFill size="16px" color="#e44d42" />
          </Case>
          <Default>
            <BsFillBookmarkFill size="16px" color="#65ba43" />
          </Default>
        </Switch>
        {props.children}
      </Flex>
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

export const IssueTypeDropdown = (props: any) => {
  const { name, value, onChange, options } = props;

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
    onChange?.(value);
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
            <Flex gap={2}>
              <Switch>
                <Case condition={localValue.label?.toLowerCase() === 'story'}>
                  <BsFillCheckSquareFill size="16px" color="#4fade6" />
                </Case>
                <Case condition={localValue.label.toLowerCase() === 'bug'}>
                  <BsFillExclamationOctagonFill size="16px" color="#e44d42" />
                </Case>
                <Default>
                  <BsFillBookmarkFill size="16px" color="#65ba43" />
                </Default>
              </Switch>
              <Text>{localValue.label}</Text>{' '}
            </Flex>
          ) : (
            'Select Type'
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

export default IssueTypeDropdown;
