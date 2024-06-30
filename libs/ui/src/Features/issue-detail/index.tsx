// LIBS
import { CloseIcon, DeleteIcon } from '@chakra-ui/icons';
import {
    Box,
    Divider,
    Flex,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    VStack
} from '@chakra-ui/react';
import React from 'react';

// COMPONENTS
import ConnectForm from '../../components/forms/ConnectForm/ConnectForm';
import FormProvider from '../../components/forms/FormProvider/FormProvider';
import InputEditable from '../../components/forms/InputEditable';
import InputEditorV2 from '../../components/forms/InputEditorV2';
import MultiSelect from '../../components/forms/InputMultiSelect';
import PxInputText from '../../components/forms/InputText/PxInputText';
import Select from '../../components/forms/Select';
import TimeTracker from '../../components/forms/TimeTracker';
import { CopyLinkButton, FeedbackButton } from '../../fsd/features';
import Comment from '../comment';
import { formNameProperties } from './form-name-properties';
import { IssueDetailLoader } from './issue-detail-loader';
import Watcher from './watcher';

interface IssueDetailProps {
    isOpen: boolean;
    statusOptions: any[];
    assigneeOptions: any[];
    reporterOptions: any[];
    priorityOptions: any[];
    typeOptions: any[];
    comments: any[];
    onSubmit: any;
    onFetchDetail: any;
    onClose: any;
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
        typeOptions,
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
            [formNameProperties.type.name]: {
                label: data?.type.name,
                value: data?.type.id,
            },
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
                        <IssueDetailLoader />
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
                    {/* RENDER BODY */}
                    <FormProvider
                        onSubmit={() => {
                            return;
                        }}
                        defaultValues={_defaultValues}
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
                                    <>
                                        {/* RENDER HEADER */}
                                        <Flex w="full" justifyContent="space-between">

                                            <Select
                                                label={formNameProperties.type.label}
                                                name={formNameProperties.type.name}
                                                options={typeOptions}
                                                {...inputProps}
                                                required
                                            >
                                                <Select.FormControl>
                                                    <Select.IssueTypeComponent />
                                                    <Select.ErrorLabel />
                                                </Select.FormControl>
                                            </Select>

                                            <HStack spacing={2}>
                                               <FeedbackButton />
                                                <CopyLinkButton />
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

                                        <HStack spacing={10} alignItems="start" mt={5}>
                                            <Flex
                                                direction="column"
                                                gap={5}
                                                width="60%"
                                                flexShrink={0}
                                            >
                                                <InputEditable
                                                    name={formNameProperties.title.name}
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
                                                    label={formNameProperties.description.label}
                                                    name={formNameProperties.description.name}
                                                    control={control}
                                                    errors={errors}
                                                >
                                                    <InputEditorV2.FormControl>
                                                        <InputEditorV2.FormLabel />
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
                                                        label={formNameProperties.status.label}
                                                        name={formNameProperties.status.name}
                                                        options={statusOptions}
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

                                                    <MultiSelect
                                                        label={formNameProperties.assignees.label}
                                                        name={formNameProperties.assignees.name}
                                                        options={assigneeOptions}
                                                        {...inputProps}
                                                        required
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
                                                        label={formNameProperties.reporter.label}
                                                        name={formNameProperties.reporter.name}
                                                        options={reporterOptions}
                                                        {...inputProps}
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
                                                        label={formNameProperties.priority.label}
                                                        name={formNameProperties.priority.name}
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
                                                        label={formNameProperties.estimate.label}
                                                        name={formNameProperties.estimate.name}
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
                                                        label={formNameProperties.timeSpent.label}
                                                        name={formNameProperties.timeSpent.name}
                                                        getValues={getValues}
                                                        timeEstimate={!Number.isNaN(+watch?.(formNameProperties.estimate.name)) ? +watch?.(formNameProperties.estimate.name) : 0}
                                                        reset={reset}
                                                        setValue={setValue}
                                                        getOptionLabel={(option: any) =>
                                                            `${option.label}: ${option.value}`
                                                        }
                                                        {...inputProps}
                                                    />
                                                </VStack>
                                                <Divider borderColor="gray.400" mt={5} />
                                                <Text> Create at 6 months ago</Text>
                                                <Text> Updated at 6 months ago</Text>
                                            </Box>
                                        </HStack>
                                    </>
                                );
                            }}
                        </ConnectForm>
                    </FormProvider>
                    {/* ./RENDER BODY */}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
