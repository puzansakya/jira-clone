// LIBS
import React from 'react';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
import * as fromHelpers from '../../../helpers';
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
const InputEditorContext = React.createContext<any>({
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
InputEditorContext.displayName = 'InputEditorContext';

// 2.
/**
 * use with composition
 *   <InputText
      name="lastName"
      label="Last Name"
      required
      control={control}
      errors={errors}
    >
      <InputText.FormControl>
        <Flex gap={2}>
          <InputText.FormLabel />
          <InputText.HelperText />
        </Flex>
        <InputText.ControllerComponent />
        <InputText.ErrorLabel />
      </InputText.FormControl>
    </InputText>
 * @param param0 
 * @returns 
 */
export const InputEditor = ({
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
  children,
  ...rest
}: any) => {
  return (
    <InputEditorContext.Provider
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
        ...rest,
      }}
    >
      {children}
    </InputEditorContext.Provider>
  );
};

interface ComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
  onChange?: any;
}

const Component = ({
  onChangeRHF,
  value,
  onChange: _onChange,
  ...propsRest
}: ComponentProps) => {
  const {
    name,
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
    ...rest
  } = useInputEditor();

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  return (
    <ReactQuill
      test-id="text-editor"
      theme="snow"
      value={value || ''}
      onChange={handleChange}
      {...rest}
      {...propsRest}
    />
  );
};

const CustomControllerComponent = (props: any) => {
  const { name, control, rule, required, ...rest } = useInputEditor();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

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
          <Component
            {...rest}
            value={_value}
            onChangeRHF={_onChange}
            {...props}
          />
        );
      }}
    />
  );
};

const useInputEditor = () => {
  const context = React.useContext(InputEditorContext);
  if (context === undefined) {
    throw new Error('useInputEditor must be used within a <InputEditor />');
  }
  return context;
};

const CustomFormControl = ({ children }: any) => {
  const { name, required, width } = useInputEditor();
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
  const { label, customLabel } = useInputEditor();
  return <FormLabel label={`${label}`} customLabel={customLabel} {...props} />;
};

const CustomFormErrorLabel = () => {
  const { required, name, errorMessage, errors } = useInputEditor();

  if (!required) {
    return null;
  }

  const error =
    errorMessage ||
    (errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message);

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};

const CustomFormHelperText = () => {
  const { required } = useInputEditor();
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
      <InputEditor
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
      </InputEditor>
    );
  }

  return (
    <InputEditor
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
    </InputEditor>
  );
};

InputEditor.Default = Default;
InputEditor.FormLabel = CustomFormLabel;
InputEditor.HelperText = CustomFormHelperText;
InputEditor.ErrorLabel = CustomFormErrorLabel;
InputEditor.FormControl = CustomFormControl;
InputEditor.ControllerComponent = CustomControllerComponent;
InputEditor.Component = Component;

export const InputEditorUsuage = () => {
  return (
    <ChakraProvider>
      <FormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          firstName: 'Puzan',
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
                <InputEditor.Default
                  name="firstName"
                  label="First Name"
                  control={control}
                  errors={errors}
                  required
                />

                <InputEditor
                  name="lastName"
                  label="Last Name"
                  required
                  control={control}
                  errors={errors}
                >
                  <InputEditor.FormControl>
                    <Flex gap={2}>
                      <InputEditor.FormLabel />
                      <InputEditor.HelperText />
                    </Flex>
                    <InputEditor.ControllerComponent />
                    <InputEditor.ErrorLabel />
                  </InputEditor.FormControl>
                </InputEditor>

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
