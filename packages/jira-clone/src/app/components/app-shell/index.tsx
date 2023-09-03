// LIBS
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// STORE
// COMPONENTS
import { IIssue } from '../../ts/models/issue';
// UI

import {
  //
  CreateIssueModal,
  PageLoading,
  SecondarySidebar,
  Sidebar,
} from 'ui';

// CONSTANTS
import { RouteEnum } from '../../routes/routeEnum';

// STORE
import * as fromIssueCreatePageStore from '../../store/@issue-create';
import * as fromIssueStore from '../../store/issue';
import * as fromIssueTypeStore from '../../store/issue-type';
import * as fromPriorityStore from '../../store/priority';
import * as fromUserStore from '../../store/user';

/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShell(props: AppShellProps) {
  // VARIABLES

  // HOOKS
  const navigate = useNavigate();
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
  const handleOpenIssueSearchModal = () => {
    navigate(`${RouteEnum.PROJECTBOARD}/${RouteEnum.ISSUE_SEARCH}`);
  };

  return (
    <Flex>
      <Sidebar
        handleOpenCreateIssueModal={handleOpenCreateIssueModal}
        onOpenIssueSearchModal={handleOpenIssueSearchModal}
      />
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
            const { assignees, ...rest } = data;
            dispatch(
              fromIssueStore.create({
                ...rest,
                assignees: assignees,
                projectId: 6,
              })
            );
            onClose();
          }}
        />
      </When>
    </Flex>
  );
}

export default AppShell;
