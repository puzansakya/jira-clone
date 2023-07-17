// LIBS
import {Outlet} from 'react-router-dom';

// STORE
// COMPONENTS
// CHAKRA UI
import {Box, Flex, useDisclosure} from '@chakra-ui/react';
import React from 'react';
import {CreateIssueModal, PageLoading, SecondarySidebar, Sidebar} from 'ui';
import {RouteEnum} from "../../routes/routeEnum";
import {ISSUE_TYPE_OPTIONS} from "../../../../../../libs/ui/src/Features/create-issue-modal/default-values";
import {useDispatch, useSelector} from "react-redux";
import * as fromStatusStore from "../../store/status";
import * as fromUserStore from "../../store/user";
import * as fromPriorityStore from "../../store/priority";

/* eslint-disable-next-line */
export interface AppShellProps {
}

export function AppShell(props: AppShellProps) {
    // VARIABLES

    // HOOKS
    const dispatch = useDispatch();
    const [loader, setLoader] = React.useState(true);
    const {isOpen, onOpen, onClose} = useDisclosure();

    // SELECTORS
    const userDropdownCollections = useSelector(fromUserStore.selectDropdownItems);
    const priorityDropdownCollections = useSelector(fromPriorityStore.selectDropdownItems);

    // FUNCTIONS
    React.useEffect(() => {
        dispatch(fromPriorityStore.fetchPriorities())
        dispatch(fromUserStore.fetchUsers())

        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, [dispatch]);

    if (loader) {
        return <PageLoading/>;
    }

    const handleOpenCreateIssueModal = () => onOpen();

    // LOCAL STATE

    // SELECTORS

    // FUNCTIONS

    return (
        <Flex>
            <Sidebar handleOpenCreateIssueModal={handleOpenCreateIssueModal}/>
            <Flex pl={14} w="full">
                <SecondarySidebar
                    items={[
                        'Releases',
                        'Issues and filters',
                        'Pages',
                        'Reports',
                        'Components',
                    ]}
                    routeEnum={RouteEnum}
                />
                <Box flex={1}>
                    <Outlet/>
                </Box>
            </Flex>
            <CreateIssueModal
                isOpen={isOpen}
                onClose={onClose}
                issueTypeOptions={ISSUE_TYPE_OPTIONS}
                reporterOptions={userDropdownCollections}
                priorityOptions={priorityDropdownCollections}
                onSubmit={(data: any) => {
                    console.log(JSON.stringify(data, null, 2));
                }}
            />
        </Flex>
    );
}

export default AppShell;
