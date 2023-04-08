// LIBS

// CHAKRA UI
import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { PxFormErrorLabel } from './PxFormErrorLabel';
import { PxComponent } from './PxComponent';
import { PxFormLabel } from './PxFormLabel';
import { PxFormHelperText } from './PxFormHelperText';
import { PxFormControl } from './PxFormControl';
import { PxInputText } from './PxInputText';
import { PxFormProvider } from './PxFormProvider';
import { PxConnectForm } from './PxConnectForm';

// UTILITIES

export const InputTextUsuage = () => {
  return (
    <ChakraProvider>
      <PxFormProvider
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
        <PxConnectForm>
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
                <PxInputText
                  label="First Name"
                  name="firstName"
                  {...inputProps}
                  required
                >
                  <PxFormControl>
                    <Flex gap={2}>
                      <PxFormLabel />
                      <PxFormHelperText />
                    </Flex>
                    <PxComponent />
                    <PxFormErrorLabel />
                  </PxFormControl>
                </PxInputText>

                <Flex>
                  <Button type="submit">Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </PxConnectForm>
      </PxFormProvider>
    </ChakraProvider>
  );
};
