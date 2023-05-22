import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon, DeleteIcon } from '@chakra-ui/icons';
import FormProvider from '../../Components/Forms/FormProvider/FormProvider';
import ConnectForm from '../../Components/Forms/ConnectForm/ConnectForm';
import Select from '../../Components/Forms/Select';
import MultiSelect from '../../Components/Forms/InputMultiSelect';
import PxInputText from '../../Components/Forms/InputText/PxInputText';
import InputEditorV2 from '../../Components/Forms/InputEditorV2';
import { mockHtmlData } from './mockHtmlData';
import Watcher from './watcher';
import InputEditable from '../../Components/Forms/InputEditable';

interface IssueDetailProps {
  statusOptions: any[];
  assigneeOptions: any[];
  reporterOptions: any[];
  priorityOptions: any[];
}
export const IssueDetail = (props: IssueDetailProps) => {
  const { statusOptions, assigneeOptions, priorityOptions, reporterOptions } =
    props;

  const INITIAL_FORM_DATA = {
    name: 'Each issue can be assigned priority from lowest to highest.',
    description: mockHtmlData,
    status: statusOptions[0],
    assignee: [assigneeOptions[2], assigneeOptions[1]],
    reporter: reporterOptions[2],
    priority: priorityOptions[1],
  };

  // LOCAL STATE
  const [_defaultValues, _setdefaultValues] = React.useState(INITIAL_FORM_DATA);

  // FUNCITONS
  const onInitUpdate = React.useCallback(() => {
    // const transformedFormValues = transformToFormValue({ ...projectSetting });
    // _setdefaultValues(transformedFormValues);
    // setloading(false);
  }, []);

  React.useEffect(() => {
    onInitUpdate();
  }, [onInitUpdate]);

  const transformToSubmitValue = (data: any) => {
    return {
      ...data,
      projectCategory: data.projectCategory?.value,
    };
  };

  const handleSubmit = async (data: any) => {
    if (!data) {
      return;
    }

    const finalPayload = transformToSubmitValue(data);

    console.log({ finalPayload });
  };

  return (
    <Modal
      size="5xl"
      isOpen={true}
      onClose={() => {
        return null;
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody py={4}>
          {/* RENDER HEADER */}
          <Flex w="full" justifyContent="space-between">
            <Button
              bg="white"
              size="sm"
              fontWeight="normal"
              fontSize="sm"
              borderRadius="sm"
            >
              Task-123456
            </Button>
            <HStack spacing={2}>
              <Button
                bg="white"
                size="sm"
                fontWeight="normal"
                fontSize="sm"
                onClick={() => {
                  return null;
                }}
                borderRadius="sm"
              >
                Give Feedback
              </Button>
              <Button
                bg="white"
                fontSize="sm"
                size="sm"
                fontWeight="normal"
                borderRadius="sm"
              >
                Copy Link
              </Button>
              <IconButton
                bg="white"
                size="sm"
                fontWeight="normal"
                fontSize="sm"
                aria-label="delete"
                icon={<DeleteIcon />}
              />
              <IconButton
                bg="white"
                size="sm"
                fontWeight="normal"
                fontSize="sm"
                aria-label="close"
                onClick={() => null}
                icon={<CloseIcon />}
              />
            </HStack>
          </Flex>
          {/* ./RENDER HEADER */}

          {/* RENDER BODY */}

          {/* ./RENDER BODY */}
          <FormProvider
            onSubmit={handleSubmit}
            defaultValues={_defaultValues}
            showDevTool
          >
            <ConnectForm>
              {(connectProps: any) => {
                return <Watcher {...connectProps} />;
              }}
            </ConnectForm>

            <ConnectForm>
              {({ control, formState }: any) => {
                const { errors } = formState;

                const inputProps = { control, errors };

                return (
                  <HStack spacing={10} alignItems="start" mt={5}>
                    <Flex direction="column" gap={5} width="60%" flexShrink={0}>
                      <InputEditable
                        name="name"
                        wait={500}
                        {...inputProps}
                        required
                      >
                        <InputEditable.FormControl>
                          <InputEditable.Component
                            fontSize="24px"
                            fontWeight={500}
                          />
                          <InputEditable.ErrorLabel />
                        </InputEditable.FormControl>
                      </InputEditable>

                      <InputEditorV2
                        name="description"
                        label="Description"
                        control={control}
                        errors={errors}
                      >
                        <InputEditorV2.FormControl>
                          <Flex gap={2}>
                            <InputEditorV2.FormLabel />
                            <InputEditorV2.HelperText />
                          </Flex>
                          <InputEditorV2.Component />
                          <InputEditorV2.ErrorLabel />
                        </InputEditorV2.FormControl>
                      </InputEditorV2>

                      {/* <Box mt={10}>
                  <Comment />
                </Box> */}
                    </Flex>
                    <Box width="40%">
                      <VStack spacing={6} mt={6}>
                        <Select
                          name="status"
                          label="STATUS"
                          {...inputProps}
                          options={statusOptions}
                          required
                        >
                          <Select.FormControl>
                            <Flex gap={2}>
                              <Select.FormLabel />
                              <Select.HelperText />
                            </Flex>
                            <Select.StatusComponent />
                            <Select.ErrorLabel />
                          </Select.FormControl>
                        </Select>

                        <MultiSelect
                          name="assignee"
                          label="ASSIGNEES"
                          {...inputProps}
                          required
                          options={assigneeOptions}
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

                        <Select
                          name="reporter"
                          label="REPORTER"
                          {...inputProps}
                          options={reporterOptions}
                          required
                        >
                          <Select.FormControl>
                            <Flex gap={2}>
                              <Select.FormLabel />
                              <Select.HelperText />
                            </Flex>
                            <Select.ReporterComponent />
                            <Select.ErrorLabel />
                          </Select.FormControl>
                        </Select>

                        <Select
                          name="priority"
                          label="PRIORITY"
                          {...inputProps}
                          options={priorityOptions}
                          required
                        >
                          <Select.FormControl>
                            <Flex gap={2}>
                              <Select.FormLabel />
                              <Select.HelperText />
                            </Flex>
                            <Select.PriorityComponent />
                            <Select.ErrorLabel />
                          </Select.FormControl>
                        </Select>

                        <PxInputText
                          name="asdf"
                          label="ORIGINAL ESTIMATE (HOURS)"
                          required
                        >
                          <PxInputText.FormControl>
                            <Flex gap={2}>
                              <PxInputText.FormLabel />
                              <PxInputText.HelperText />
                            </Flex>
                            <PxInputText.Component
                              size="sm"
                              color="brand.label"
                              borderColor="gray.300"
                            />
                            <PxInputText.ErrorLabel />
                          </PxInputText.FormControl>
                        </PxInputText>

                        {/* <TimeTracking
                    value={{
                      timeSpent: 5,
                      timeEstimated: 20,
                    }}
                  /> */}
                      </VStack>
                      <Divider borderColor="gray.400" mt={5} />
                      <Text> Create at 6 months ago</Text>
                      <Text> Updated at 6 months ago</Text>
                    </Box>
                  </HStack>
                );
              }}
            </ConnectForm>
          </FormProvider>
          {/* <DetailBody /> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
