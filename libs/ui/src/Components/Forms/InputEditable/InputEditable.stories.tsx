import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import ConnectForm from '../ConnectForm/ConnectForm';
import FormProvider from '../FormProvider/FormProvider';
import InputEditable from './InputEditable';

const Story: Meta<typeof InputEditable> = {
  component: InputEditable,
  title: 'Forms/Input Editable',
};
export default Story;

export const Default = {
  render: () => (
    <ChakraProvider>
      <FormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          firstName: 'uzan',
          lastName: 'Shakya',
        }}
        showDevTool
      >
        <ConnectForm>
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
                <InputEditable
                  label="First Name"
                  name="firstName"
                  {...inputProps}
                  required
                >
                  <InputEditable.FormControl>
                    <Flex gap={2}>
                      <InputEditable.FormLabel />
                      <InputEditable.HelperText />
                    </Flex>
                    <InputEditable.Component />
                    <InputEditable.ErrorLabel />
                  </InputEditable.FormControl>
                </InputEditable>

                <InputEditable.Default
                  label="Last Name"
                  name="lastName"
                  {...inputProps}
                  required
                />

                <Flex>
                  <Button type="submit">Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </ConnectForm>
      </FormProvider>
    </ChakraProvider>
  ),
};
