// LIBS

// CHAKRA UI
import {
  Button,
  ChakraProvider,
  Container,
  Flex,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { DevTool } from '@hookform/devtools';
import React from 'react';
import {
  Controller,
  FormProvider as RHFFormProvider,
  useForm,
  useFormContext,
} from 'react-hook-form';

// UTILITIES

// HELPERS

// COMPONENTS
import * as fromHelpers from '../../../Helpers';
import FormErrorLable from '../FormErrorLabel/FormErrorLabel';
import FormLabel from '../FormLabel/FormLabel';

export interface ConnectFormProps {
  children: any;
}

export const PzConnectForm = (props: ConnectFormProps) => {
  const { children } = props;
  const methods = useFormContext();

  return children({ ...methods });
};

export interface PzFormProviderProps {
  defaultValues?: any;
  children?: any;
  onSubmit?: any;
  showDevTool?: boolean;
}

export const PzFormProvider = (props: PzFormProviderProps) => {
  const { defaultValues, children, showDevTool = false, onSubmit } = props;
  const methods = useForm({ mode: 'all', defaultValues: defaultValues });

  return (
    <RHFFormProvider {...methods}>
      {showDevTool && <DevTool control={methods.control} />}

      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </RHFFormProvider>
  );
};

interface PzInputProps {
  children?: any;
  name: string;
  label: any;
  control?: any;
  errors?: any;
  required?: boolean;
  rule?: any;
  value?: any;
  onChange?: any;
}

export const PzInputContext = React.createContext<PzInputProps>({
  label: 'Sample label',
  name: '',
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: '',
  onChange: undefined,
});

PzInputContext.displayName = 'PzInputContext';

const PzInput = (props: PzInputProps) => {
  const { children, ...rest } = props;
  // PASS IN PROPS TO CONTEXT

  return (
    <PzInputContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </PzInputContext.Provider>
  );
};

const usePzInput = () => {
  const context = React.useContext(PzInputContext);
  if (context === undefined) {
    throw new Error('usePzInput must be used within a <Toggle />');
  }
  return context;
};

const PzFormLabel = (props: any) => {
  const { label } = usePzInput();
  return <FormLabel label={`${label}`} {...props} />;
};

interface PzComponentProps extends InputProps {
  onChangeRHF?: any;
}
const PzComponent = (props: PzComponentProps) => {
  const { onChangeRHF, ...rest } = props;
  const pzContext = usePzInput();

  const { name, value, onChange: _onChange } = pzContext;

  const handleChange = (e: any) => {
    const { value } = e.target;
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const inputProps = {
    name,
    value,
  };
  return <Input onChange={handleChange} {...inputProps} {...rest} />;
};

const PzControlledComponent = () => {
  const { control, name } = usePzInput();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: 'Required',
        },
      }}
      render={({ field: { onChange } }) => (
        <PzComponent onChangeRHF={onChange} />
      )}
    />
  );
};

const PzFormErrorLabel = () => {
  const { name, errors, required } = usePzInput();

  if (!required) {
    return null;
  }

  const error =
    errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message;

  return <FormErrorLable py="2px" px={1} fontSize="14px" message={error} />;
};

// *******************************

export const InputTextUsuage = () => {
  return (
    <ChakraProvider>
      <PzFormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          firstName: '',
          lastName: '',
        }}
        showDevTool
      >
        <PzConnectForm>
          {(formProps: any) => {
            const {
              control,
              formState: { errors },
            } = formProps;

            const inputProps = {
              control,
              errors,
            };

            return (
              <Container
                maxW="xl"
                py={5}
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <PzInput
                  label="First Name"
                  name="firstName"
                  {...inputProps}
                  required
                >
                  <PzFormLabel />
                  <PzControlledComponent />
                  <PzFormErrorLabel />
                </PzInput>

                <Flex>
                  <Button type="submit">Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </PzConnectForm>
      </PzFormProvider>
    </ChakraProvider>
  );
};
