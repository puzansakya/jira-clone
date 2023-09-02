import { INITIAL_FORM_VALUE } from './default-values';

import {
  Button,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import Select from '../../Components/Forms/Select';
import { formNameProperties } from './form-name-properties';
import FormProvider from '../../Components/Forms/FormProvider/FormProvider';
import ConnectForm from '../../Components/Forms/ConnectForm/ConnectForm';
import { InputEditor } from '../../Components/Forms/InputEditor/InputEditor';
import React from 'react';
import PxInputText from '../../Components/Forms/InputText/PxInputText';
import MultiSelect from '../../Components/Forms/InputMultiSelect';

interface CreateIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  issueTypeOptions: any[];
  reporterOptions: any[];
  priorityOptions: any[];
  fetchInitialData: () => void;
}

export const CreateIssueModal = (props: CreateIssueModalProps) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    issueTypeOptions,
    reporterOptions,
    priorityOptions,
    fetchInitialData,
  } = props;

  // FUNCTIONS
  React.useEffect(() => {
    fetchInitialData();
  }, []);

  const transformToSubmitValues = (data: any) => {
    return {
      ...data,
      [formNameProperties.IssueType.name]:
        data[formNameProperties.IssueType.name].value,
      [formNameProperties.Reporter.name]:
        data[formNameProperties.Reporter.name].value,
      [formNameProperties.Priority.name]:
        data[formNameProperties.Priority.name].value,
      [formNameProperties.Assignees.name]:
        data[formNameProperties.Assignees.name].map((assignee:any) => assignee.value),
    };
  };

  const handleSubmit = (data: any) => {
    if (!data) {
      return;
    }
    const finalPayload = transformToSubmitValues(data);
    onSubmit?.(finalPayload);
  };

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Issue</ModalHeader>
        <ModalCloseButton />
        <FormProvider
          onSubmit={handleSubmit}
          defaultValues={INITIAL_FORM_VALUE}
        >
          <ConnectForm>
            {({ control, formState }: any) => {
              const { errors } = formState;
              return (
                <ModalBody px={10} py={8}>
                  <VStack align="start" spacing={5}>
                    <Select
                      name={formNameProperties.IssueType.name}
                      label={formNameProperties.IssueType.label}
                      options={issueTypeOptions}
                      required
                      control={control}
                      errors={errors}
                    >
                      <Select.FormControl>
                        <Flex gap={2}>
                          <Select.FormLabel />
                          <Select.HelperText />
                        </Flex>
                        <Select.Component />
                        <Text fontSize="sm">
                          Start typing to get a list of possible matches.
                        </Text>
                        <Select.ErrorLabel />
                      </Select.FormControl>
                    </Select>

                    <Divider borderColor="gray.400" />

                    <PxInputText
                      name={formNameProperties.ShortSummary.name}
                      label={formNameProperties.ShortSummary.label}
                      required
                      control={control}
                      errors={errors}
                    >
                      <PxInputText.FormControl>
                        <Flex gap={2}>
                          <PxInputText.FormLabel />
                          <PxInputText.HelperText />
                        </Flex>
                        <PxInputText.Component
                          size="sm"
                          borderColor="gray.300"
                        />
                        <Text fontSize="sm">
                          Concisely summarize the issue in one or two sentences.
                        </Text>
                        <PxInputText.ErrorLabel />
                      </PxInputText.FormControl>
                    </PxInputText>

                    <InputEditor
                      name={formNameProperties.Description.name}
                      label={formNameProperties.Description.label}
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

                    <Select
                      name={formNameProperties.Reporter.name}
                      label={formNameProperties.Reporter.label}
                      options={reporterOptions}
                      required
                      control={control}
                      errors={errors}
                    >
                      <Select.FormControl>
                        <Flex gap={2}>
                          <Select.FormLabel fontSize="sm" />
                          <Select.HelperText />
                        </Flex>
                        <Select.Component />
                        <Select.ErrorLabel />
                      </Select.FormControl>
                    </Select>

                    <MultiSelect
                      name={formNameProperties.Assignees.name}
                      label={formNameProperties.Assignees.label}
                      options={reporterOptions}
                      required
                      control={control}
                      errors={errors}
                    >
                      <MultiSelect.FormControl>
                        <Flex gap={2}>
                          <MultiSelect.FormLabel fontSize="sm" />
                          <MultiSelect.HelperText />
                        </Flex>
                        <MultiSelect.Component />
                        <MultiSelect.ErrorLabel />
                      </MultiSelect.FormControl>
                    </MultiSelect>

                    <Select
                      name={formNameProperties.Priority.name}
                      label={formNameProperties.Priority.label}
                      options={priorityOptions}
                      required
                      control={control}
                      errors={errors}
                    >
                      <Select.FormControl>
                        <Flex gap={2}>
                          <Select.FormLabel fontSize="sm" />
                          <Select.HelperText />
                        </Flex>
                        <Select.PriorityComponent />
                        <Select.ErrorLabel />
                        <Text fontSize="sm">
                          Priority in relation to other issues.
                        </Text>
                      </Select.FormControl>
                    </Select>
                  </VStack>
                </ModalBody>
              );
            }}
          </ConnectForm>
          <ConnectForm>
            {() => {
              return (
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
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};
