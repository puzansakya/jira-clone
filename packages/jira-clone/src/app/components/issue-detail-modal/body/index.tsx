import {
  Box,
  Button,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  ConnectForm,
  FormProvider,
  InputEditable,
  InputEditor,
  InputStatusMultiSelect,
  PageLoading,
  PxInputText,
  TimeTracking,
} from 'ui';
import Comment from './comment';

import * as fromIssueDetailPageStore from '../../../store/@issue-detail';
import * as fromStatusStore from './../../../store/status';
import { useDispatch, useSelector } from 'react-redux';
import Watcher from './watcher';

const INITIAL_FORM_VALUE = {};

const DetailBody = () => {
  // HOOKS
  const dispatch = useDispatch();

  // LOCAL STATE
  const [_defaultValues, _setDefaultValues] =
    React.useState(INITIAL_FORM_VALUE);
  const [loading, setLoading] = React.useState(true);

  // SELECTORS
  const statuses = useSelector(fromStatusStore.selectDropdownItems);

  // FUNCTIONS
  const onInitUpdate = React.useCallback(async () => {
    const issueId = 'b6d0f803-8ab1-401a-8384-cdaa7f519c35';

    const issueDetail = await dispatch(
      fromIssueDetailPageStore.fetchPageData(issueId)
    );

    const transformedFormValues = transformToFormValue(issueDetail);
    _setDefaultValues(transformedFormValues);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    onInitUpdate();
  }, [onInitUpdate]);

  const transformToFormValue = (data: any) => {
    const returnValue = {
      ...data,
      status: {
        label: data?.status?.name,
        value: data?.status?.id,
      },
    };

    return returnValue;
  };

  const transformToSubmitValue = (data: any) => {
    return {
      ...data,
    };
  };

  const handleSubmit = async (data: any) => {
    if (!data) {
      return;
    }

    const finalPayload = transformToSubmitValue(data);
  };

  if (loading) {
    return <PageLoading h="200px" />;
  }

  return (
    <FormProvider onSubmit={handleSubmit} defaultValues={_defaultValues}>
      <ConnectForm>
        {(connectProps: any) => {
          return <Watcher {...connectProps} />;
        }}
      </ConnectForm>
      <ConnectForm>
        {({ control, formState }: any) => {
          const { errors, isSubmitting } = formState;

          const inputProps = { control, errors };

          return (
            <HStack spacing={10} alignItems="start" mt={5}>
              <Flex direction="column" gap={5} width="60%" flexShrink={0}>
                <InputEditable name="title" label="" {...inputProps}>
                  <InputEditable.Component />
                </InputEditable>

                <InputEditor
                  name="description"
                  label="Description"
                  required
                  {...inputProps}
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

                <HStack spacing={2} mt={8}>
                  <Button
                    bg="brand.secondary"
                    _hover={{ bg: 'brand.primary' }}
                    size="sm"
                    fontWeight="normal"
                    color="white"
                    type="submit"
                    borderRadius="sm"
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    fontWeight="normal"
                    // onClick={() => { }}
                    borderRadius="sm"
                  >
                    Cancel
                  </Button>
                </HStack>
                <Box mt={10}>
                  <Comment />
                </Box>
              </Flex>
              <Box width="40%">
                <VStack spacing={6} mt={6}>
                  <InputStatusMultiSelect
                    label="STATUS"
                    name="status"
                    options={statuses}
                    {...inputProps}
                    required
                  >
                    <InputStatusMultiSelect.FormControl>
                      <Flex gap={2}>
                        <InputStatusMultiSelect.FormLabel />
                        <InputStatusMultiSelect.HelperText />
                      </Flex>
                      <InputStatusMultiSelect.ControllerComponent />
                      <InputStatusMultiSelect.ErrorLabel />
                    </InputStatusMultiSelect.FormControl>
                  </InputStatusMultiSelect>

                  <InputStatusMultiSelect
                    label="ASSIGNEES"
                    name="assignee"
                    options={[
                      {
                        value: '1',
                        label: 'Lord Gaben',
                        src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
                      },
                      {
                        value: '2',
                        label: 'Baby Yoda',
                        src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
                      },
                      {
                        value: '3',
                        label: 'Pickle Rick',
                        src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
                      },
                    ]}
                    required
                  >
                    <InputStatusMultiSelect.FormControl>
                      <Flex gap={2}>
                        <InputStatusMultiSelect.FormLabel />
                        <InputStatusMultiSelect.HelperText />
                      </Flex>
                      <InputStatusMultiSelect.AssigneeComponent />
                      <InputStatusMultiSelect.ErrorLabel />
                    </InputStatusMultiSelect.FormControl>
                  </InputStatusMultiSelect>

                  <InputStatusMultiSelect
                    label="REPORTER"
                    name="reporter"
                    options={[
                      {
                        value: '1',
                        label: 'Lord Gaben',
                        src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
                      },
                      {
                        value: '2',
                        label: 'Baby Yoda',
                        src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
                      },
                      {
                        value: '3',
                        label: 'Pickle Rick',
                        src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
                      },
                    ]}
                    required
                  >
                    <InputStatusMultiSelect.FormControl>
                      <Flex gap={2}>
                        <InputStatusMultiSelect.FormLabel />
                        <InputStatusMultiSelect.HelperText />
                      </Flex>
                      <InputStatusMultiSelect.ReporterComponent />
                      <InputStatusMultiSelect.ErrorLabel />
                    </InputStatusMultiSelect.FormControl>
                  </InputStatusMultiSelect>

                  <InputStatusMultiSelect
                    label="PRIORITY"
                    name="priority"
                    options={[
                      { value: 'highest', label: 'Highest', icon: 'up' },
                      { value: 'high', label: 'High', icon: 'up' },
                      { value: 'medium', label: 'Medium', icon: 'up' },
                      { value: 'low', label: 'Low', icon: 'down' },
                      { value: 'lowest', label: 'Lowest', icon: 'down' },
                    ]}
                    required
                  >
                    <InputStatusMultiSelect.FormControl>
                      <Flex gap={2}>
                        <InputStatusMultiSelect.FormLabel />
                        <InputStatusMultiSelect.HelperText />
                      </Flex>
                      <InputStatusMultiSelect.PriorityComponent />
                      <InputStatusMultiSelect.ErrorLabel />
                    </InputStatusMultiSelect.FormControl>
                  </InputStatusMultiSelect>

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

                  <TimeTracking
                    value={{
                      timeSpent: 5,
                      timeEstimated: 20,
                    }}
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
  );
};
export default DetailBody;
