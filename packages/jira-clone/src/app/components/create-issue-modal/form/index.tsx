import {
  Button,
  Divider,
  Flex,
  HStack,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  ConnectForm,
  FormProvider,
  InputEditor,
  InputSelect,
  InputStatusMultiSelect,
} from 'ui';

const INITIAL_FORM_DATA = {
  issueType: {
    label: 'Task',
    value: 1,
  },
  shortSummary: 'This is short summary',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  reporter: {
    label: 'Lord Gaben',
    value: 1,
  },
  assignees: {
    label: 'Lord Gaben',
    value: 1,
  },
  priority: {
    label: 'Highest',
    value: 1,
  },
};

const ISSUE_TYPE_OPTION = [
  {
    label: 'Task',
    value: 1,
  },
  {
    label: 'Story',
    value: 2,
  },
  {
    label: 'Bug',
    value: 3,
  },
];
const REPORTER_OPTION = [
  {
    label: 'Lord Gaben',
    value: 1,
  },
  {
    label: 'Pickel Rick',
    value: 2,
  },
  {
    label: 'Baby Yoda',
    value: 3,
  },
];
const PRIORITY_OPTION = [
  {
    label: 'Highest',
    value: 1,
  },
  {
    label: 'High',
    value: 2,
  },
  {
    label: 'Medium',
    value: 3,
  },
  {
    label: 'Low',
    value: 3,
  },
  {
    label: 'Lowest',
    value: 3,
  },
];

const CreateIssueForm = ({ onClose }: any) => {
  const handleSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <FormProvider onSubmit={handleSubmit} defaultValues={INITIAL_FORM_DATA}>
      <ConnectForm>
        {({ control, formState }: any) => {
          const { errors } = formState;
          return (
            <>
              <ModalBody px={10} py={8}>
                <VStack align="start" spacing={5}>
                  <InputSelect
                    name="issueType"
                    label="Issue Type"
                    options={ISSUE_TYPE_OPTION}
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputSelect.FormControl>
                      <Flex gap={2}>
                        <InputSelect.FormLabel />
                        <InputSelect.HelperText />
                      </Flex>
                      <InputSelect.ControllerComponent />
                      <Text fontSize="sm">
                        Start typing to get a list of possible matches.
                      </Text>
                      <InputSelect.ErrorLabel />
                    </InputSelect.FormControl>
                  </InputSelect>

                  <Divider borderColor="gray.400" />

                  <InputStatusMultiSelect
                    name="shortSummary"
                    label="Short Summary"
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputStatusMultiSelect.FormControl>
                      <Flex gap={2}>
                        <InputStatusMultiSelect.FormLabel fontSize="sm" />
                        <InputStatusMultiSelect.HelperText />
                      </Flex>
                      <InputStatusMultiSelect.ControllerComponent
                        size="sm"
                        borderColor="gray.300"
                      />
                      <InputStatusMultiSelect.ErrorLabel />
                      <Text fontSize="sm">
                        Concisely summarize the issue in one or two sentences.
                      </Text>
                    </InputStatusMultiSelect.FormControl>
                  </InputStatusMultiSelect>

                  <InputEditor
                    name="description"
                    label="Description"
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputEditor.FormControl>
                      <Flex gap={2}>
                        <InputEditor.FormLabel fontSize="sm" />
                        <InputEditor.HelperText />
                      </Flex>
                      <InputEditor.ControllerComponent />
                      <InputEditor.ErrorLabel />
                      <Text fontSize="sm">
                        Describe the issue in as much detail as you'd like.
                      </Text>
                    </InputEditor.FormControl>
                  </InputEditor>

                  <InputSelect
                    name="reporter"
                    label="Reporter"
                    options={REPORTER_OPTION}
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputSelect.FormControl>
                      <Flex gap={2}>
                        <InputSelect.FormLabel fontSize="sm" />
                        <InputSelect.HelperText />
                      </Flex>
                      <InputSelect.ControllerComponent />
                      <InputSelect.ErrorLabel />
                    </InputSelect.FormControl>
                  </InputSelect>

                  <InputSelect
                    name="assignees"
                    label="Assignees"
                    options={REPORTER_OPTION}
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputSelect.FormControl>
                      <Flex gap={2}>
                        <InputSelect.FormLabel fontSize="sm" />
                        <InputSelect.HelperText />
                      </Flex>
                      <InputSelect.ControllerComponent />
                      <InputSelect.ErrorLabel />
                    </InputSelect.FormControl>
                  </InputSelect>

                  <InputSelect
                    name="priority"
                    label="Priority"
                    options={PRIORITY_OPTION}
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputSelect.FormControl>
                      <Flex gap={2}>
                        <InputSelect.FormLabel fontSize="sm" />
                        <InputSelect.HelperText />
                      </Flex>
                      <InputSelect.ControllerComponent />
                      <InputSelect.ErrorLabel />
                      <Text fontSize="sm">
                        Priority in relation to other issues.
                      </Text>
                    </InputSelect.FormControl>
                  </InputSelect>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <HStack spacing={2}>
                  <Button
                    bg="brand.secondary"
                    _hover={{ bg: 'brand.primary' }}
                    size="sm"
                    fontWeight="normal"
                    color="white"
                    type="submit"
                    borderRadius="sm"
                  >
                    Create Issue
                  </Button>
                  <Button
                    size="sm"
                    fontWeight="normal"
                    onClick={onClose}
                    borderRadius="sm"
                  >
                    Cancel
                  </Button>
                </HStack>
              </ModalFooter>
            </>
          );
        }}
      </ConnectForm>
    </FormProvider>
  );
};

export default CreateIssueForm;
