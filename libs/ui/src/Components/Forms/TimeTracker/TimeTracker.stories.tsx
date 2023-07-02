import {Button, ChakraProvider, Container, Flex} from '@chakra-ui/react';
import type {Meta} from '@storybook/react';
import ConnectForm from '../ConnectForm/ConnectForm';
import FormProvider from '../FormProvider/FormProvider';
import TimeTracker from '.';

const Story: Meta<typeof TimeTracker> = {
    component: () => {

        return (
            <ChakraProvider>
                <FormProvider
                    onSubmit={(data: any) => {
                        console.log({
                            data,
                        });
                    }}
                    defaultValues={{
                        timeSpent: 20,
                        timeEstimate: 100,
                    }}
                    showDevTool
                >
                    <ConnectForm>
                        {(formProps: any) => {
                            const {
                                control,
                                getValues,
                                reset,
                                watch,
                                setValue,
                                formState: {errors},
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
                                    <TimeTracker.Default
                                        name="timeSpent"
                                        estimateName="timeEstimate"
                                        label="Empty"
                                        // required={true}
                                        getOptionLabel={(option: any) =>
                                            `${option.label}: ${option.value}`
                                        }
                                        getValues={getValues}
                                        watch={watch}
                                        reset={reset}
                                        setValue={setValue}
                                        {...inputProps}
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
    title: 'Forms/Time Tracker',
};

export default Story;

export const Default = {
    args: {},
};
