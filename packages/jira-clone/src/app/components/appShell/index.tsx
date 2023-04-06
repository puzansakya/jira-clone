// LIBS
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// STORE

// COMPONENTS

// CHAKRA UI
import { Box, Flex, useColorMode, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../sidebar';
import { PageLoading } from 'ui';
import Navigator from '../navigator';
import CreateIssueModal from '../create-issue-modal';

/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShell(props: AppShellProps) {
  // VARIABLES

  // HOOKS

  const [loader, setLoader] = React.useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return <PageLoading />;
  }

  const handleOpenCreateIssueModal = () => onOpen();

  // LOCAL STATE

  // SELECTORS

  // FUNCITONS

  return (
    <Flex>
      <Sidebar handleOpenCreateIssueModal={handleOpenCreateIssueModal} />
      <Flex pl={14} w="full">
        <Navigator />
        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
      <CreateIssueModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default AppShell;
