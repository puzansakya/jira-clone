// import {
//   Box,
//   Button,
//   Center,
//   FormLabel,
//   Spinner,
//   VStack,
// } from '@chakra-ui/react';

// import { ProjectSettingForm as PzProjectSettingForm } from 'ui';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const INITIAL_FORM_DATA = {
//   name: 'singularity 1.0',
//   url: 'https://www.atlassian.com/software/jiffra',
//   description:
//     'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
//   projectCategory: {
//     label: 'Software',
//     value: 1,
//   },
// };

// const ProjectSettingForm = () => {
//   // VARIABLES

//   // HOOKS
//   const dispatch = useDispatch();

//   // LOCAL STATE
//   const [_defaultValues, _setdefaultValues] = React.useState(INITIAL_FORM_DATA);
//   const [loading, setloading] = React.useState(true);

//   // FUNCITONS
//   const onInitUpdate = React.useCallback(() => {
//     const transformedFormValues = transformToFormValue({});
//     _setdefaultValues(transformedFormValues);
//     setloading(false);
//   }, []);

//   React.useEffect(() => {
//     onInitUpdate();
//   }, [onInitUpdate]);

//   const transformToFormValue = (data: any) => {
//     return {
//       ...data,
//     };
//   };

//   const transformToSubmitValue = (data: any) => {
//     return {
//       ...data,
//     };
//   };

//   const handleSubmit = async (data: any) => {
//     if (!data) {
//       return;
//     }

//     const finalPayload = transformToSubmitValue(data);

//     // dispatch(
//     //   fromProjectSettingStore.saveProjectSetting({
//     //     payload: finalPayload,
//     //   })
//     // );
//     return new Promise((reject, resolve) => {
//       setTimeout(() => {
//         resolve('');
//       }, 2000);
//     });
//   };

//   // if (loading) {
//   //   return <Center minH="200px" >
//   //     <Spinner />
//   //   </Center>
//   // }

//   return (
//     <Box mt={5}>
//       <PzFormProvider onSubmit={handleSubmit} defaultValues={_defaultValues}>
//         <ConnectForm>
//           {({ control, formState, reset }: any) => {
//             const { errors, isSubmitting } = formState;

//             return (
//               <>
//                 <VStack align="start" spacing={5}>
//                   <Input
//                     size="sm"
//                     borderColor="gray.300"
//                     customLabel={
//                       <FormLabel fontSize="sm" mb={1}>
//                         Names
//                       </FormLabel>
//                     }
//                     name="name"
//                     control={control}
//                     errors={errors}
//                     required
//                   />
//                   <Input
//                     size="sm"
//                     borderColor="gray.300"
//                     customLabel={
//                       <FormLabel fontSize="sm" mb={1}>
//                         URL
//                       </FormLabel>
//                     }
//                     name="url"
//                     control={control}
//                     errors={errors}
//                     required
//                   />
//                   <Input
//                     inputName="texteditor"
//                     customLabel={
//                       <FormLabel fontSize="sm" mb={1}>
//                         Description
//                       </FormLabel>
//                     }
//                     name="description"
//                     control={control}
//                     errors={errors}
//                     required
//                   />
//                   <Input
//                     inputName="reactselect"
//                     customLabel={
//                       <FormLabel fontSize="sm" mb={1}>
//                         Project Category
//                       </FormLabel>
//                     }
//                     name="projectCategory"
//                     options={[]}
//                     control={control}
//                     errors={errors}
//                     required
//                   />
//                 </VStack>
//                 <Button
//                   mt={7}
//                   bg="brand.secondary"
//                   _hover={{ bg: 'brand.primary' }}
//                   size="sm"
//                   fontWeight="normal"
//                   color="white"
//                   type="submit"
//                   borderRadius="sm"
//                   isLoading={isSubmitting}
//                 >
//                   Save Changes
//                 </Button>
//               </>
//             );
//           }}
//         </ConnectForm>
//       </PzFormProvider>
//     </Box>
//   );
// };

// export default ProjectSettingForm;

export {};
