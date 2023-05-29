import { Box, Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  ConnectForm,
  FormProvider,
  InputEditorV2,
  // InputStatusMultiSelect,
  PageLoading,
  PxInputText,
  Select,
  TimeTracking,
} from 'ui';
import Comment from './comment';

import { useDispatch, useSelector } from 'react-redux';
import * as fromIssueDetailPageStore from '../../../store/@issue-detail';
import * as fromStatusStore from './../../../store/status';
import * as fromUserStore from './../../../store/user';
import Editor from './editor';
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
  const statuses: any = useSelector(fromStatusStore.selectDropdownItems);
  const userDropdownOptions: any = useSelector(
    fromUserStore.selectDropdownItems
  );

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
      reporter: {
        label: `${data?.reporter?.firstName} ${data?.reporter?.lastName}`,
        value: data?.reporter?.id,
        src: data?.reporter?.avatar,
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
        {({ control, getValues, formState }: any) => {
          const { errors, isSubmitting } = formState;

          const inputProps = { control, errors };

          return (
            <HStack spacing={10} alignItems="start" mt={5}>
              <Flex direction="column" gap={5} width="60%" flexShrink={0}>
                <InputEditorV2 name="title" label="" {...inputProps}>
                  <InputEditorV2.Component />
                </InputEditorV2>

                <Editor {...inputProps} getValues={getValues} />

                <Box mt={10}>
                  <Comment />
                </Box>
              </Flex>
              <Box width="40%">
                <VStack spacing={6} mt={6}>
                  <Select
                    label="STATUS"
                    name="status"
                    options={statuses}
                    {...inputProps}
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

                  {/* <Select
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
                    <Select.FormControl>
                      <Flex gap={2}>
                        <Select.FormLabel />
                        <Select.HelperText />
                      </Flex>
                      <Select.Component />
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select> */}

                  <Select
                    label="REPORTER"
                    name="reporter"
                    options={userDropdownOptions}
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
