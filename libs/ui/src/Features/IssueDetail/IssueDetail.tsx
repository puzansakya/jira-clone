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
import Watcher from './watcher';
import InputEditable from '../../Components/Forms/InputEditable';
import TimeTracker from '../../Components/Forms/TimeTracker';
import Comment from '../comment';

interface IssueDetailProps {
  isOpen: boolean;
  onClose: any;
  statusOptions: any[];
  assigneeOptions: any[];
  reporterOptions: any[];
  priorityOptions: any[];
  onSubmit: any;
  onFetchDetail: any;
  comments: any[];
  fetchInitialData: () => void;
  createComment: (comment: string) => void;
  updateComment: (comment: any) => void;
}

export const IssueDetail = (props: IssueDetailProps) => {
  const {
    isOpen,
    onClose,
    onFetchDetail,
    onSubmit,
    statusOptions,
    assigneeOptions,
    priorityOptions,
    comments,
    reporterOptions,
    fetchInitialData,
    createComment,
    updateComment,
  } = props;

  const [loading, setLoading] = React.useState<boolean>(true);

  // LOCAL STATE
  const [_defaultValues, _setdefaultValues] = React.useState<any>(null);

  // FUNCTIONS
  React.useEffect(() => {
    fetchInitialData();
  }, []);

  const transformToFormValue = (data: any) => {
    return {
      ...data,
      status: {
        label: data?.status.name,
        value: data?.status.id,
      },
      reporter: {
        label: `${data?.reporter.firstName} ${data?.reporter.lastName}`,
        value: data?.reporter.id,
      },
      priority: {
        label: data?.priority.name,
        value: data?.priority.id,
      },
      assignees: data?.assignees.map((assignee: any) => {
        return {
          label: `${assignee.firstName} ${assignee.lastName}`,
          value: assignee.id,
          src: assignee.avatar,
        };
      }),
    };
  };

  const onInitUpdate = React.useCallback(async () => {
    const data = await onFetchDetail();
    const transformedFormValues = transformToFormValue(data);
    _setdefaultValues(transformedFormValues);
    setLoading(false);
  }, [onFetchDetail]);

  React.useEffect(() => {
    onInitUpdate();
  }, [onInitUpdate]);

  if (loading) {
    return (
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody py={4}>
            <Text>Loading</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody py={4}>
          {/* RENDER HEADER */}
          <Flex w="full" justifyContent="space-between">
            {/*<pre>{JSON.stringify(_defaultValues, null, 2)}</pre>*/}
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
                onClick={onClose}
                icon={<CloseIcon />}
              />
            </HStack>
          </Flex>
          {/* ./RENDER HEADER */}

          {/* RENDER BODY */}

          {/* ./RENDER BODY */}
          <FormProvider
            onSubmit={() => {
              return;
            }}
            defaultValues={_defaultValues}
            showDevTool
          >
            <ConnectForm>
              {(connectProps: any) => {
                return <Watcher {...connectProps} onSubmit={onSubmit} />;
              }}
            </ConnectForm>

            <ConnectForm>
              {({
                control,
                getValues,
                setValue,
                watch,
                reset,
                formState,
              }: any) => {
                const { errors } = formState;

                const inputProps = { control, errors };

                return (
                  <HStack spacing={10} alignItems="start" mt={5}>
                    <Flex direction="column" gap={5} width="60%" flexShrink={0}>
                      <InputEditable
                        name="title"
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

                      <Comment
                        createComment={createComment}
                        updateComment={updateComment}
                        comments={comments}
                      />
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
                          name="assignees"
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
                          name="estimate"
                          label="ORIGINAL ESTIMATE (HOURS)"
                          {...inputProps}
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
