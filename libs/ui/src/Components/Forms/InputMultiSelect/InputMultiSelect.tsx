// LIBS
import React from 'react';
import { Controller } from 'react-hook-form';

// CHAKRA UI
import { Flex, FormControl, FormHelperText } from '@chakra-ui/react';

// UTILITIES
import isEmpty from 'lodash/isEmpty';

// HELPERS
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';

// COMPONENTS
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import FormLabel from '../FormLabel/FormLabel';
import StatusDropdown from './StatusDropdown';
import AssigneeDropdown from './AssigneeDropdown';
import ReporterDropdown from './ReporterDropdown';
import PriorityDropdown from './PriorityDropdown';

/**
 * 1. Define Context with default values
 * 2. Define Parent Component
 * 3. Define usable hook
 * 4. Define required child component
 * 5. Compose into default
 * 6. export all
 *
 */

// 1.
const InputStatusMultiSelectContext = React.createContext<any>({
  label: 'Sample label',
  control: undefined,
  ignoreControl: false,
  required: false,
  showOptionalLabel: true,
  errors: undefined,
  rule: undefined,
  width: undefined,
  customLabel: undefined,
  labelPosition: undefined,
  errorMessage: undefined,
});
InputStatusMultiSelectContext.displayName = 'InputStatusMultiSelectContext';

// 2.
export const InputStatusMultiSelect = ({
  label,
  control,
  ignoreControl,
  required = false,
  showOptionalLabel,
  errors,
  rule,
  options,
  width,
  customLabel,
  labelPosition,
  errorMessage,
  children,
  ...rest
}: any) => {
  return (
    <InputStatusMultiSelectContext.Provider
      value={{
        label,
        control,
        ignoreControl,
        required,
        showOptionalLabel,
        errors,
        rule,
        width,
        customLabel,
        labelPosition,
        errorMessage,
        options,
        ...rest,
      }}
    >
      {children}
    </InputStatusMultiSelectContext.Provider>
  );
};

interface ComponentProps {
  onChangeRHF?: any;
  value?: any;
}

const AssigneeComponent = ({
  onChangeRHF,
  value,
  ...propsRest
}: ComponentProps) => {
  const {
    name,
    onChange2,
    label,
    control,
    ignoreControl,
    required,
    showOptionalLabel,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    value: userValue,
    ...contextRest
  } = useInputStatusMultiSelect();

  const handleChange = (e: any) => {
    const { value } = e.target;
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <AssigneeDropdown
      value={value || userValue}
      onChange={handleChange}
      w="full"
      {...contextRest}
      {...propsRest}
    />
  );
};

const AssigneeControllerComponent = (props: any) => {
  const { name, control, rule, required, ...rest } =
    useInputStatusMultiSelect();

  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={(controllerProps) => {
        const {
          field: { onChange: _onChange, value: _value },
        } = controllerProps;
        return (
          <AssigneeComponent
            value={_value}
            onChangeRHF={_onChange}
            {...props}
          />
        );
      }}
    />
  );
};

const ReporterComponent = ({
  onChangeRHF,
  value,
  ...propsRest
}: ComponentProps) => {
  const {
    name,
    onChange2,
    label,
    control,
    ignoreControl,
    required,
    showOptionalLabel,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    value: userValue,
    ...contextRest
  } = useInputStatusMultiSelect();

  const handleChange = (e: any) => {
    const { value } = e.target;
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <ReporterDropdown
      value={value || userValue}
      onChange={handleChange}
      w="full"
      {...contextRest}
      {...propsRest}
    />
  );
};

const ReporterControllerComponent = (props: any) => {
  const { name, control, rule, required, ...rest } =
    useInputStatusMultiSelect();

  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={(controllerProps) => {
        const {
          field: { onChange: _onChange, value: _value },
        } = controllerProps;
        return (
          <ReporterComponent
            value={_value}
            onChangeRHF={_onChange}
            {...props}
          />
        );
      }}
    />
  );
};

const PriorityComponentD = ({
  onChangeRHF,
  value,
  ...propsRest
}: ComponentProps) => {
  const {
    name,
    onChange2,
    label,
    control,
    ignoreControl,
    required,
    showOptionalLabel,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    value: userValue,
    ...contextRest
  } = useInputStatusMultiSelect();

  const handleChange = (e: any) => {
    const { value } = e.target;
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <PriorityDropdown
      value={value || userValue}
      onChange={handleChange}
      w="full"
      {...contextRest}
      {...propsRest}
    />
  );
};

const PriorityControllerComponent = (props: any) => {
  const { name, control, rule, required, ...rest } =
    useInputStatusMultiSelect();

  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={(controllerProps) => {
        const {
          field: { onChange: _onChange, value: _value },
        } = controllerProps;
        return (
          <PriorityComponentD
            value={_value}
            onChangeRHF={_onChange}
            {...props}
          />
        );
      }}
    />
  );
};

const StatusComponent = ({
  onChangeRHF,
  value,
  ...propsRest
}: ComponentProps) => {
  const {
    name,
    onChange2,
    label,
    control,
    ignoreControl,
    required,
    showOptionalLabel,
    errors,
    rule,
    width,
    customLabel,
    labelPosition,
    errorMessage,
    value: userValue,
    ...contextRest
  } = useInputStatusMultiSelect();

  const handleChange = (e: any) => {
    const { value } = e.target;
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <StatusDropdown
      value={value || userValue}
      onChange={handleChange}
      w="full"
      {...contextRest}
      {...propsRest}
    />
  );
};

const StatusControllerComponent = (props: any) => {
  const { name, control, rule, required, ...rest } =
    useInputStatusMultiSelect();

  let _rule = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={(controllerProps) => {
        const {
          field: { onChange: _onChange, value: _value },
        } = controllerProps;
        return (
          <StatusComponent value={_value} onChangeRHF={_onChange} {...props} />
        );
      }}
    />
  );
};

const useInputStatusMultiSelect = () => {
  const context = React.useContext(InputStatusMultiSelectContext);
  if (context === undefined) {
    throw new Error(
      'useInputStatusMultiSelect must be used within a <InputStatusMultiSelect />'
    );
  }
  return context;
};

const CustomFormControl = ({ children }: any) => {
  const { name, required, width } = useInputStatusMultiSelect();
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap={2}
      id={name}
      isRequired={required}
      style={{ width }}
    >
      {children}
    </FormControl>
  );
};

const CustomFormLabel = (props: any) => {
  const { label, customLabel } = useInputStatusMultiSelect();
  return <FormLabel label={`${label}`} customLabel={customLabel} {...props} />;
};

const CustomFormErrorLabel = () => {
  const { required, name, errorMessage, errors } = useInputStatusMultiSelect();

  if (!required) {
    return null;
  }

  const error =
    errorMessage ||
    (errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message);

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};

const CustomFormHelperText = () => {
  const { required } = useInputStatusMultiSelect();
  if (required) {
    return null;
  }

  return (
    <FormHelperText
      m={0}
      pl="10px"
      color="gray.500"
      fontWeight="300"
      fontSize="14px"
    >
      optional
    </FormHelperText>
  );
};

const Default = ({ name, label, control, errors, required }: any) => {
  if (control) {
    return (
      <InputStatusMultiSelect
        required={required}
        name={name}
        label={label}
        control={control}
        errors={errors}
      >
        <CustomFormControl>
          <Flex gap={2}>
            <CustomFormLabel />
            <CustomFormHelperText />
          </Flex>
          <StatusControllerComponent />
          <CustomFormErrorLabel />
        </CustomFormControl>
      </InputStatusMultiSelect>
    );
  }

  return (
    <InputStatusMultiSelect
      required={required}
      name={name}
      label={label}
      control={control}
      errors={errors}
    >
      <CustomFormControl>
        <CustomFormLabel />
        <StatusComponent />
      </CustomFormControl>
    </InputStatusMultiSelect>
  );
};

InputStatusMultiSelect.Default = Default;
InputStatusMultiSelect.FormLabel = CustomFormLabel;
InputStatusMultiSelect.HelperText = CustomFormHelperText;
InputStatusMultiSelect.ErrorLabel = CustomFormErrorLabel;
InputStatusMultiSelect.FormControl = CustomFormControl;
InputStatusMultiSelect.Component = StatusComponent;
InputStatusMultiSelect.ControllerComponent = StatusControllerComponent;
InputStatusMultiSelect.AssigneeComponent = AssigneeComponent;
InputStatusMultiSelect.AssigneeControllerComponent =
  AssigneeControllerComponent;
InputStatusMultiSelect.ReporterComponent = ReporterComponent;
InputStatusMultiSelect.ReporterControllerComponent =
  ReporterControllerComponent;
InputStatusMultiSelect.PriorityComponent = PriorityComponentD;
InputStatusMultiSelect.PriorityControllerComponent =
  PriorityControllerComponent;
