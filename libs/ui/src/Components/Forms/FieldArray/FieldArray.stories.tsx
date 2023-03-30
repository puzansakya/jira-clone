import type { Meta } from '@storybook/react';
import { FieldArray } from './FieldArray';
import { FormProvider } from './../FormProvider/FormProvider';
import { ConnectForm } from './../ConnectForm/ConnectForm';
import {
  Button,
  ChakraProvider,
  Container,
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react';
import TextInput from '../TextInput/TextInput';

const name = 'reviewDetails';

const DEFAULT_VALUES = {
  Id: null,
  PerformanceFormId: 104,
  PerformanceRolloutId: 102,
  reviewDetails: [
    [
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 98,
        RatingScaleOptionId: 94,
        selfMarkingValue: 0,
        Name: 'Component 1',
      },
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 99,
        RatingScaleOptionId: 95,
        selfMarkingValue: 0,
        Name: 'Component 2',
      },
    ],
  ],
  Comments: [
    {
      Id: 444,
      ReviewId: 501,
      PerfomanceFormId: 0,
      RolloutId: 102,
      SectionId: 197,
      SectionContentId: 117,
      Comment: '',
      CreatedOn: '2023-03-28T17:33:32.567',
      EmployeeId: 11,
      EmployeeName: 'Durga Man Shrestha',
      UrlPhoto: '\\uploads\\179056fd-b656-4ae1-81dc-308487dd6657.jpg',
      IsManager: true,
    },
  ],
  signature: false,
  SectionName: 'Matrix Rating',
  IntroText: 'Text Block Intro',
  RatingScaleOptions: [
    {
      value: 94,
      label: 'Opt 1',
      score: 1,
    },
    {
      value: 95,
      label: 'Opt 2',
      score: 2,
    },
  ],
  //   [name]: [
  //     [
  //       {
  //         sectionId: 197,
  //         sectionContentId: 117,
  //         sectionContentOptionId: 98,
  //         RatingScaleOptionId: 94,
  //         selfMarkingValue: 0,
  //         Name: 'Component 1',
  //       },
  //       {
  //         sectionId: 197,
  //         sectionContentId: 117,
  //         sectionContentOptionId: 99,
  //         RatingScaleOptionId: 95,
  //         selfMarkingValue: 0,
  //         Name: 'Component 2',
  //       },
  //     ],
  //   ],
};

const DEFAULT_VALUE_2 = {
  [name]: [
    [
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 98,
        RatingScaleOptionId: 94,
        selfMarkingValue: 0,
        Name: 'Component 1',
      },
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 99,
        RatingScaleOptionId: 95,
        selfMarkingValue: 0,
        Name: 'Component 2',
      },
    ],
    [
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 98,
        RatingScaleOptionId: 94,
        selfMarkingValue: 0,
        Name: 'Component 3',
      },
      {
        sectionId: 197,
        sectionContentId: 117,
        sectionContentOptionId: 99,
        RatingScaleOptionId: 95,
        selfMarkingValue: 0,
        Name: 'Component 4',
      },
    ],
  ],
};

const Story: Meta<typeof FieldArray> = {
  title: 'Forms/Field Array',
  component: () => {
    return <FASecond />;
  },
};
export default Story;

export const Default = {
  args: {},
};

const FAFIrst = () => {
  const handleSubmit = (data: any) => {
    if (!data) {
      return;
    }
    console.log(JSON.stringify(data, null, 2));
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  return (
    <ChakraProvider>
      <FormProvider
        onSubmit={handleSubmit}
        defaultValues={DEFAULT_VALUES}
        showDevTool
      >
        <Container maxW="md">
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors, isSubmitting },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return DEFAULT_VALUES[name].map((val: any, valIdx: number) => {
                return (
                  <FieldArray
                    key={`field-array-key-${valIdx}`}
                    control={control}
                    errors={errors}
                    name={`${name}.${valIdx}`}
                    renderField={({ name, fields, remove, append }: any) => {
                      return (
                        <Flex direction="column" gap={5}>
                          <List display="flex" flexDir="column" gap={5}>
                            {fields.map((item: any, fieldIdx: number) => {
                              console.log({
                                fieldArrayName: `${name}.${valIdx}`,
                                NameName: `${name}.${fieldIdx}.Name`,
                                RatingScaleOptionId: `${name}.${fieldIdx}.RatingScaleOptionId`,
                              });
                              return (
                                <ListItem
                                  display="flex"
                                  alignItems="flex-end"
                                  key={item.id}
                                  gap={2}
                                >
                                  <TextInput
                                    label="Name"
                                    required
                                    name={`${name}.${fieldIdx}.Name`}
                                    {...inputProps}
                                  />
                                  <TextInput
                                    label="RatingScaleOptionId"
                                    type="number"
                                    required
                                    name={`${name}.${fieldIdx}.RatingScaleOptionId`}
                                    {...inputProps}
                                  />

                                  <Button onClick={() => remove(fieldIdx)}>
                                    Delete
                                  </Button>
                                </ListItem>
                              );
                            })}
                          </List>
                          <Flex gap={2}>
                            <Button
                              onClick={() =>
                                append({ firstName: '', lastName: 'luo' })
                              }
                            >
                              Append
                            </Button>
                            <Button type="submit" isLoading={isSubmitting}>
                              Submit
                            </Button>
                          </Flex>
                        </Flex>
                      );
                    }}
                  />
                );
              });
            }}
          </ConnectForm>
        </Container>
      </FormProvider>
    </ChakraProvider>
  );
};

const FASecond = () => {
  const handleSubmit = (data: any) => {
    if (!data) {
      return;
    }
    console.log(JSON.stringify(data, null, 2));
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  return (
    <ChakraProvider>
      <FormProvider
        onSubmit={handleSubmit}
        defaultValues={DEFAULT_VALUE_2}
        showDevTool
      >
        <Container maxW="md">
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                getValues,
                formState: { errors, isSubmitting },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <>
                  {DEFAULT_VALUE_2[name].map((item: any, itemIdx: number) => {
                    return (
                      <FieldArray
                        control={control}
                        errors={errors}
                        name={`${name}`}
                        renderField={({
                          name,
                          fields,
                          remove,
                          append,
                        }: any) => {
                          return (
                            <Flex direction="column" gap={5}>
                              <List display="flex" flexDir="column" gap={5}>
                                {fields.map((item: any, fieldIdx: number) => {
                                  return (
                                    <ListItem
                                      display="flex"
                                      alignItems="flex-end"
                                      key={item.id}
                                      gap={2}
                                    >
                                      <TextInput
                                        label="Name"
                                        required
                                        name={`${name}.${itemIdx}.${fieldIdx}.Name`}
                                        {...inputProps}
                                      />
                                      <TextInput
                                        label="RatingScaleOptionId"
                                        type="number"
                                        required
                                        name={`${name}.${itemIdx}.${fieldIdx}.RatingScaleOptionId`}
                                        {...inputProps}
                                      />

                                      <Button onClick={() => remove(fieldIdx)}>
                                        Delete
                                      </Button>
                                    </ListItem>
                                  );
                                })}
                              </List>
                              <Flex gap={2}>
                                <Button
                                  onClick={() =>
                                    append({ firstName: '', lastName: 'luo' })
                                  }
                                >
                                  Append
                                </Button>
                                <Button type="submit" isLoading={isSubmitting}>
                                  Submit
                                </Button>
                              </Flex>
                            </Flex>
                          );
                        }}
                      />
                    );
                  })}
                </>
              );
            }}
          </ConnectForm>
        </Container>
      </FormProvider>
    </ChakraProvider>
  );
};
