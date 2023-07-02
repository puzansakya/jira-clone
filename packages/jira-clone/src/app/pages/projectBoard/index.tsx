// LIBS
import {When} from 'react-if';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

// CHAKRA
import {SearchIcon} from '@chakra-ui/icons';
import {
    Avatar,
    AvatarGroup,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    useDisclosure,
} from '@chakra-ui/react';

// COMPONENTS
import Board from './board';

//STORE
import * as fromProjectBoardStore from '../../store/@project-board';
import * as fromBoardStore from '../../store/board';
import * as fromUserStore from '../../store/user';
import * as fromIssueStore from "../../store/board";
import * as fromIssueDetailPageStore from '../../store/@issue-detail';

import {isEmpty} from 'lodash';
import {IssueDetail} from "ui";

export const mockHtmlData = `<h2>Key terms to know</h2><p><br></p><h3>Issues</h3><p>A Jira 'issue' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.</p><p><br></p><h3>Projects</h3><p>A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.</p><p><br></p><h3>Workflows</h3><p>Workflows represent the&nbsp;sequential&nbsp;path an issues takes from creation to completion. A basic workflow might look something like this:</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=736" alt="Jira workflow diagram"></p><p><br></p><p>In this case, Open, Done, and the labels in between represent the status an issue can take, while the arrows represent potential transitions from one status to another.</p><p><br></p><h3>Agile</h3><p>Agile is not a Jira Software-specific term. It's a work philosophy that originated in the software development field and has since expanded to a variety of other industries. While we won't belabor the definition here (there are&nbsp;great resources for that!), agile emphasizes an iterative approach to work informed by customer feedback where delivery occurs incrementally and continuously. The ideal agile team can move quickly and adapt to changing requirements without missing much of a beat.</p><p><br></p><h3>Server</h3><p>With&nbsp;Jira Software Server,&nbsp;you host Jira Software on your own hardware and customize your setup however you'd like. This is generally the best option for teams who need to manage all the details,&nbsp;have stricter requirements for data governance,&nbsp;and don't mind the additional complexity of hosting themselves.</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:4a1b934f-38b4-456e-b807-29e93935e00f/Server%20Cluster@2x.png?cdnVersion=736" alt="Data Center"></p><p><br></p><h3>Data Center</h3><p><br></p><h3>With&nbsp;Jira Software Data Center, you can host Jira Software on your own hardware or with IaaS vendors like&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/aws" rel="noopener noreferrer" target="_blank">AWS</a>&nbsp;and&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/azure" rel="noopener noreferrer" target="_blank">Azure</a>. This is generally the best option for enterprise teams who need uninterrupted access to Jira Software and performance at scale.</h3><p><br></p>`;

const STATUS_OPTIONS = [
    {value: '1', label: 'Done', bg: 'green.500', color: 'white'},
    {
        value: '2',
        label: 'Backlog',
        bg: 'gray.300',
        color: 'gray.900',
    },
    {
        value: '3',
        label: 'Selected For Development',
        bg: 'gray.300',
        color: 'gray.900',
    },
    {
        value: '4',
        label: 'In Progress',
        bg: 'blue.500',
        color: 'white',
    },
];

const ASSIGNEE_OPTIONS = [
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
];

const PRIORITY_OPTIONS = [
    {value: 'highest', label: 'Highest', icon: 'up'},
    {value: 'high', label: 'High', icon: 'up'},
    {value: 'medium', label: 'Medium', icon: 'up'},
    {value: 'low', label: 'Low', icon: 'down'},
    {value: 'lowest', label: 'Lowest', icon: 'down'},
];

const REPORTER_OPTIONS = [
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
];
const ProjectBoard = () => {
    // VARIABLES

    // HOOKS
    const dispatch = useDispatch();
    const {isOpen, onOpen, onClose} = useDisclosure();

    // LOCAL STATE
    const [selectedIssueId, setSelectedIssueId] = React.useState<number>(-1)

    // SELECTORS
    const filters = useSelector(fromBoardStore.selectFilters);
    const isFilterClearable = useSelector(fromBoardStore.selectIsFilterClearable);
    const users = useSelector(fromUserStore.selectItems);

    // FUNCTIONS
    React.useEffect(() => {
        dispatch(fromProjectBoardStore.fetchPageData());

        return () => {
            dispatch(fromBoardStore.clearBoardPageData());
        };
    }, [dispatch]);

    const handleOpenIssueDetailModal = (issueId:number) => {

        setSelectedIssueId(issueId)
        onOpen()
    };

    return (
        <>
            <Box h="100vh" p={8} minHeight="100vh" overflowY="auto" flex={1}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink fontSize="sm" href="#">
                            Projects
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink fontSize="sm" href="#">
                            Singularity 1.0
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink fontSize="sm" href="#">
                            Kanban board
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Flex alignItems="center" justifyContent="space-between">
                    <Heading fontSize="24px" fontWeight="medium" lineHeight="short">
                        Kanban Board
                    </Heading>
                    <Button bg="white" fontSize="sm" fontWeight="normal">
                        Github Repo
                    </Button>
                </Flex>

                <HStack spacing={3} mt={6} alignItems="center">
                    <InputGroup w={44} size="sm">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300"/>}
                        />
                        <Input
                            type="text"
                            value={filters.query || ''}
                            name="query"
                            onChange={(e: any) => {
                                const {name, value} = e.target;
                                dispatch(fromBoardStore.updateFilters({[name]: value}));
                            }}
                        />
                    </InputGroup>
                    <AvatarGroup size="sm" max={3}>
                        {!isEmpty(users) &&
                            users?.map((user: any, idx: number) => {
                                return (
                                    <Avatar
                                        key={`avatar-${idx}`}
                                        bg="white"
                                        p="2px"
                                        border={
                                            filters.users.includes(user.id)
                                                ? '2px solid blue'
                                                : '2px solid transparent'
                                        }
                                        cursor="pointer"
                                        name={`${user.firstName} ${user.lastName}`}
                                        src={user?.avatar}
                                        _hover={{
                                            zIndex: idx,
                                        }}
                                        onClick={() => {
                                            dispatch(fromBoardStore.updateFilters({user: user.id}));
                                        }}
                                    />
                                );
                            })}
                    </AvatarGroup>
                    <Button bg="white" size="sm" fontWeight="normal" fontSize="sm">
                        Only My Issues
                    </Button>
                    <Button bg="white" size="sm" fontWeight="normal" fontSize="sm">
                        Recently Updated
                    </Button>

                    <When condition={isFilterClearable}>
                        <Button
                            bg="brand.secondary"
                            _hover={{bg: 'brand.primary'}}
                            size="sm"
                            fontWeight="normal"
                            color="white"
                            type="submit"
                            borderRadius="sm"
                            onClick={() => {
                                dispatch(fromBoardStore.applyFilter());
                            }}
                        >
                            Apply Filter
                        </Button>

                        <Button
                            bg="brand.secondary"
                            _hover={{bg: 'brand.primary'}}
                            size="sm"
                            fontWeight="normal"
                            color="white"
                            type="submit"
                            borderRadius="sm"
                            onClick={() => {
                                dispatch(fromBoardStore.clearFilters());
                            }}
                        >
                            Clear Filter
                        </Button>
                    </When>
                </HStack>

                <Board handleOpenIssueDetailModal={handleOpenIssueDetailModal}/>
            </Box>

            <When condition={selectedIssueId !== -1 && isOpen}>
                <IssueDetail
                    isOpen={isOpen}
                    onClose={onClose}
                    statusOptions={STATUS_OPTIONS}
                    assigneeOptions={ASSIGNEE_OPTIONS}
                    reporterOptions={REPORTER_OPTIONS}
                    priorityOptions={PRIORITY_OPTIONS}
                    onFetchDetail={() => {
                        // const INITIAL_FORM_DATA = {
                        //     name: 'Each issue can be assigned priority from lowest to highest.',
                        //     description: mockHtmlData,
                        //     status: STATUS_OPTIONS[0],
                        //     assignee: [ASSIGNEE_OPTIONS[2], ASSIGNEE_OPTIONS[1]],
                        //     reporter: REPORTER_OPTIONS[2],
                        //     priority: PRIORITY_OPTIONS[1],
                        //     timeEstimate: 100,
                        //     timeSpent: 20
                        // };
                        //
                        // return new Promise((resolve, reject) => {
                        //     resolve(INITIAL_FORM_DATA)
                        // })
                      return dispatch(fromIssueStore.fetchIssueDetail(selectedIssueId))
                        // return dispatch(
                        //     fromIssueDetailPageStore.fetchPageData(issueId)
                        // );
                    }}
                    onSubmit={async(data: any) => {
                        console.log(JSON.stringify(data, null, 2));
                        await dispatch(fromIssueStore.updateIssue(data));
                    }}
                />
            </When>


        </>
    );
};

export default ProjectBoard;
