// import { Else, If, Then } from 'react-if';
// import { useGetIssuesQuery } from '../../store/api/issue';

// const ProjectBoard = () => {
//   const { data, error, isLoading } = useGetIssuesQuery();
//   return (
//     <If condition={isLoading}>
//       <Then>
//         <span>loading</span>
//       </Then>
//       <Else>
//         <If condition={!isLoading && data}>
//           <Then>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           </Then>
//           <Else>
//             <span>No data</span>
//           </Else>
//         </If>
//       </Else>
//     </If>
//   );
// };

// export default ProjectBoard;

// LIBS
import { When } from 'react-if';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

// CHAKRA
import { SearchIcon } from '@chakra-ui/icons';
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
import IssueDetailModal from '../../components/issue-detail-modal';

//STORE
import * as fromProjectBoardStore from '../../store/@project-board';
import * as fromBoardStore from '../../store/board';
import * as fromUserStore from '../../store/user';
import { isEmpty } from 'lodash';

const ProjectBoard = () => {
  // VARIABLES

  // HOOKS
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // LOCAL STATE

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

  const handleOpenIssueDetailModal = () => onOpen();

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
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              value={filters.query || ''}
              name="query"
              onChange={(e: any) => {
                const { name, value } = e.target;
                dispatch(fromBoardStore.updateFilters({ [name]: value }));
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
                      dispatch(fromBoardStore.updateFilters({ user: user.id }));
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
              _hover={{ bg: 'brand.primary' }}
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
              _hover={{ bg: 'brand.primary' }}
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

        <Board handleOpenIssueDetailModal={handleOpenIssueDetailModal} />
      </Box>
      <IssueDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProjectBoard;
