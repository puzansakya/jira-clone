import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';

import React from 'react';
import ConnectForm from '../../components/forms/ConnectForm/ConnectForm';
import FormProvider from '../../components/forms/FormProvider/FormProvider';
import { InputEditor } from '../../components/forms/InputEditor/InputEditor';
import { PxInputText } from '../../components/forms/InputText/PxInputText';
import { Select } from '../../components/forms/Select';
import { INITIAL_FORM_DATA } from './default-values';
import { formNameProperties } from './form-name-properties';

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
                    label={formNameProperties.name.label}
                    name={formNameProperties.name.name}
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
                    label={formNameProperties.url.label}
                    name={formNameProperties.url.name}
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
                    label={formNameProperties.description.label}
                    name={formNameProperties.description.name}
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

                  <Select
                    label={formNameProperties.projectCategory.label}
                    name={formNameProperties.projectCategory.name}
                    options={[]}
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
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select>
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
