import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import ConnectForm from '../ConnectForm/ConnectForm';
import FormProvider from '../FormProvider/FormProvider';
import MultiSelect from '.';

const SELECT_OPTIONS = [
  {
    label: 'one',
    value: '1',
    src: 'https://i.pravatar.cc/300',
  },
  {
    label: 'Two',
    value: '2',
    src: 'https://i.pravatar.cc/300',
  },
  {
    label: 'Three',
    value: '3',
    src: 'https://i.pravatar.cc/300',
  },
];

const Story: Meta<typeof MultiSelect> = {
  title: 'Forms/Multi Select',
  component: () => {
    const commonProps = {
      options: SELECT_OPTIONS,
    };

    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: [],
            default: [SELECT_OPTIONS[1]],
            composed: [SELECT_OPTIONS[2]],
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
                  <MultiSelect.Default
                    name="empty"
                    label="Empty"
                    required={true}
                    getOptionLabel={(option: any) =>
                      `${option.label}: ${option.value}`
                    }
                    {...inputProps}
                    {...commonProps}
                  />

                  <MultiSelect.Default
                    name="default"
                    label="Default"
                    {...inputProps}
                    isDisabled
                    required
                    {...commonProps}
                  />

                  <MultiSelect
                    name="composed"
                    label="Composed"
                    {...inputProps}
                    required
                    {...commonProps}
                  >
                    <MultiSelect.FormControl>
                      <Flex gap={2}>
                        <MultiSelect.FormLabel />
                        <MultiSelect.HelperText />
                      </Flex>
                      <MultiSelect.Component />
                      <MultiSelect.ErrorLabel />
                    </MultiSelect.FormControl>
                  </MultiSelect>

                  <MultiSelect.Default
                    name="uncontrolled"
                    label="Uncontrolled"
                    value={[]}
                    onChange={(name: string, value: string) => {
                      console.log({ name, value });
                    }}
                    {...commonProps}
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
    );
  },
};

export default Story;

export const Default = {
  args: {},
};
