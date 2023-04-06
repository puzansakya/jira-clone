// LIBS
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

// CHAKRA UI
import {
  Button,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

// UTILITIES
import isEmpty from 'lodash/isEmpty';

// HELPERS
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';

// COMPONENTS
import ConnectForm from '../ConnectForm/ConnectForm';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import FormLabel from '../FormLabel/FormLabel';
import FormProvider from '../FormProvider/FormProvider';

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
const InputSelectContext = React.createContext<any>({
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
InputSelectContext.displayName = 'InputSelectContext';

// 2.
/**
 * use with composition
    <InputSelect
      name="lastName"
      label="Last Name"
      options={options}
      required
      control={control}
      errors={errors}
    >
      <InputSelect.FormControl>
        <Flex gap={2}>
          <InputSelect.FormLabel />
          <InputSelect.HelperText />
        </Flex>
        <InputSelect.ControllerComponent />
        <InputSelect.ErrorLabel />
      </InputSelect.FormControl>
    </InputSelect>
 * @param param0 
 * @returns 
 */
export const InputSelect = ({
  label,
  control,
  ignoreControl,
  required = false,
  showOptionalLabel,
  errors,
  rule,
  width,
  customLabel,
  labelPosition,
  errorMessage,
  options,
  children,
  ...rest
}: any) => {
  return (
    <InputSelectContext.Provider
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
    </InputSelectContext.Provider>
  );
};

interface ComponentProps {
  onChangeRHF: any;
  value: any;
}

const Component = ({ onChangeRHF, value }: ComponentProps) => {
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
    options,
    ...rest
  } = useInputText();

  const handleChange = (value: any) => {
    onChange2?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <Select onChange={handleChange} value={value} {...rest} options={options} />
  );
};

const CustomControllerComponent = () => {
  const { name, control, rule, required, ...rest } = useInputText();

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
        return <Component {...rest} value={_value} onChangeRHF={_onChange} />;
      }}
    />
  );
};

const useInputText = () => {
  const context = React.useContext(InputSelectContext);
  if (context === undefined) {
    throw new Error('useInputText must be used within a <InputEditor />');
  }
  return context;
};

const CustomFormControl = ({ children }: any) => {
  const { name, required, width } = useInputText();
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
  const { label, customLabel } = useInputText();
  return <FormLabel label={`${label}`} customLabel={customLabel} {...props} />;
};

const CustomFormErrorLabel = () => {
  const { required, name, errorMessage, errors } = useInputText();

  if (!required) {
    return null;
  }

  const error =
    errorMessage ||
    (errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message);

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};

const CustomFormHelperText = () => {
  const { required } = useInputText();
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

const Default = ({ name, label, control, errors, required, options }: any) => {
  if (control) {
    return (
      <InputSelect
        options={options}
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
          <CustomControllerComponent />
          <CustomFormErrorLabel />
        </CustomFormControl>
      </InputSelect>
    );
  }

  return (
    <InputSelect
      options={options}
      required={required}
      name={name}
      label={label}
      control={control}
      errors={errors}
    >
      <CustomFormControl>
        <CustomFormLabel />
        <CustomControllerComponent />
      </CustomFormControl>
    </InputSelect>
  );
};

InputSelect.Default = Default;
InputSelect.FormLabel = CustomFormLabel;
InputSelect.HelperText = CustomFormHelperText;
InputSelect.ErrorLabel = CustomFormErrorLabel;
InputSelect.FormControl = CustomFormControl;
InputSelect.ControllerComponent = CustomControllerComponent;
InputSelect.Component = Component;

export const InputSelectUsuage = () => {
  const options = [
    {
      label: 'Puzan',
      value: 'puzan',
    },
    {
      label: 'Shakya',
      value: 'sakya',
    },
  ];
  return (
    <ChakraProvider>
      <FormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          firstName: options[0],
          lastName: 'sakya',
        }}
        showDevTool
      >
        <ConnectForm>
          {(formProps: any) => {
            const {
              control,
              formState: { errors },
            } = formProps;

            return (
              <Container
                maxW="xl"
                py={5}
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <InputSelect.Default
                  name="firstName"
                  label="First Name"
                  options={options}
                  control={control}
                  errors={errors}
                  required
                />

                <InputSelect
                  name="lastName"
                  label="Last Name"
                  options={options}
                  required
                  control={control}
                  errors={errors}
                >
                  <InputSelect.FormControl>
                    <Flex gap={2}>
                      <InputSelect.FormLabel />
                      <InputSelect.HelperText />
                    </Flex>
                    <InputSelect.ControllerComponent />
                    <InputSelect.ErrorLabel />
                  </InputSelect.FormControl>
                </InputSelect>

                <Flex>
                  <Button type="submit">Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </ConnectForm>
      </FormProvider>
    </ChakraProvider>
  );
};
