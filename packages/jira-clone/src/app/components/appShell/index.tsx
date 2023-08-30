// LIBS
import { Outlet } from 'react-router-dom';

// STORE
// COMPONENTS
// CHAKRA UI
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import { useDispatch, useSelector } from 'react-redux';
import { CreateIssueModal, PageLoading, SecondarySidebar, Sidebar } from 'ui';
import { RouteEnum } from '../../routes/routeEnum';
import * as fromIssueCreatePageStore from '../../store/@issue-create';
import { ISSUE_STORE } from '../../store/issue';
import * as fromIssueTypeStore from '../../store/issue-type';
import * as fromPriorityStore from '../../store/priority';
import * as fromUserStore from '../../store/user';
import { IIssue } from '../../ts/models/issue';

/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShell(props: AppShellProps) {
  // VARIABLES

  // HOOKS
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // LOCAL STATE
  const [loader, setLoader] = React.useState(true);

  // SELECTORS
  const priorityOptions = useSelector(fromPriorityStore.selectDropdownItems);

  const issueTypeOptions = useSelector(fromIssueTypeStore.selectDropdownItems);
  const userOptions = useSelector(fromUserStore.selectDropdownItems);

  // FUNCTIONS
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [dispatch]);

  if (loader) {
    return <PageLoading />;
  }

  const handleOpenCreateIssueModal = () => onOpen();

  return (
    <Flex>
      <Sidebar handleOpenCreateIssueModal={handleOpenCreateIssueModal} />
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
          <Outlet />
        </Box>
      </Flex>

      <When condition={isOpen}>
        <CreateIssueModal
          fetchInitialData={() => {
            dispatch(fromIssueCreatePageStore.fetchPageData());
          }}
          isOpen={isOpen}
          onClose={onClose}
          issueTypeOptions={issueTypeOptions}
          reporterOptions={userOptions}
          priorityOptions={priorityOptions}
          onSubmit={(data: Partial<IIssue>) => {
            console.log(JSON.stringify(data, null, 2));
            const { title, descriptionText, ...rest } = data;
            dispatch(ISSUE_STORE.create({ ...data, projectId: 6 }));
            onClose();
          }}
        />
      </When>
    </Flex>
  );
}

export default AppShell;
