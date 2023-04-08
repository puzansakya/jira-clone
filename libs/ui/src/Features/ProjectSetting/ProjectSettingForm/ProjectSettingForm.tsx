import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

import React from 'react';
import ConnectForm from '../../../Components/Forms/ConnectForm/ConnectForm';
import FormProvider from '../../../Components/Forms/FormProvider/FormProvider';
import { InputEditor } from '../../../Components/Forms/InputEditor/InputEditor';
import { InputSelect } from '../../../Components/Forms/InputSelect/InputSelect';
import { PxInputText } from '../../../Components/Forms/InputText/PxInputText';

const INITIAL_FORM_DATA = {
  name: '',
  url: 'https://www.atlassian.com/software/jiffra',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  projectCategory: {
    label: 'Software',
    value: 1,
  },
};

/* eslint-disable-next-line */
export interface ProjectSettingFormProps {
  projectCategoriesOptions: any[];
}

export function ProjectSettingForm({
  projectCategoriesOptions,
}: ProjectSettingFormProps) {
  // VARIABLES

  // HOOKS

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
    <Box mt={5}>
      <FormProvider onSubmit={handleSubmit} defaultValues={_defaultValues}>
        <ConnectForm>
          {({ control, formState }: any) => {
            const { errors, isSubmitting } = formState;

            return (
              <>
                <VStack align="start" spacing={5}>
                  <PxInputText
                    name="name"
                    label="Name"
                    required
                    control={control}
                    errors={errors}
                  >
                    <PxInputText.FormControl>
                      <Flex gap={2}>
                        <PxInputText.FormLabel />
                        <PxInputText.HelperText />
                      </Flex>
                      <PxInputText.Component size="sm" borderColor="gray.300" />
                      <PxInputText.ErrorLabel />
                    </PxInputText.FormControl>
                  </PxInputText>

                  <PxInputText
                    name="url"
                    label="URL"
                    required
                    control={control}
                    errors={errors}
                  >
                    <PxInputText.FormControl>
                      <Flex gap={2}>
                        <PxInputText.FormLabel />
                        <PxInputText.HelperText />
                      </Flex>
                      <PxInputText.Component size="sm" borderColor="gray.300" />
                      <PxInputText.ErrorLabel />
                    </PxInputText.FormControl>
                  </PxInputText>

                  <InputEditor
                    name="description"
                    label="Description"
                    required
                    control={control}
                    errors={errors}
                  >
                    <InputEditor.FormControl>
                      <Flex gap={2}>
                        <InputEditor.FormLabel />
                        <InputEditor.HelperText />
                      </Flex>
                      <InputEditor.ControllerComponent />
                      <InputEditor.ErrorLabel />
                      <Text fontSize="xs" color="#5E6C84">
                        Describe the project in as much detail as you'd like.
                      </Text>
                    </InputEditor.FormControl>
                  </InputEditor>

                  <InputSelect
                    name="projectCategory"
                    label="Project Category"
                    options={[]}
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
                      <InputSelect.ErrorLabel />
                    </InputSelect.FormControl>
                  </InputSelect>
                </VStack>

                <Button
                  mt={7}
                  bg="brand.secondary"
                  _hover={{ bg: 'brand.primary' }}
                  size="sm"
                  fontWeight="normal"
                  color="white"
                  type="submit"
                  borderRadius="sm"
                  isLoading={isSubmitting}
                >
                  Save Changes
                </Button>
              </>
            );
          }}
        </ConnectForm>
      </FormProvider>
    </Box>
  );
}

export default ProjectSettingForm;
