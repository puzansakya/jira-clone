import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react';

import { useMachine } from '@xstate/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { InputText, TypeIcon } from 'ui';
import { RouteEnum } from '../../routes/routeEnum';
import * as fromInterface from './../../ts';
import { machine } from './machine';

export const IssueSearchPage = () => {
  const navigate = useNavigate();

  const [state, send] = useMachine(machine);

  const handleClose = () => {
    navigate(RouteEnum.PROJECTBOARD);
  };

  return (
    <Drawer isOpen={true} placement="left" onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Search Issue</DrawerHeader>

        <DrawerBody>
          <Flex direction={'column'} gap={10}>
            <InputText
              required={false}
              name="search issue"
              label="search issue"
              onChange={(name: string, value: string) => {
                console.log({
                  name,
                  value,
                });
                send({
                  type: 'search',
                  search: value,
                });
              }}
            >
              <InputText.FormControl>
                <InputText.DebouncedComponent
                  borderRadius={'none'}
                  bg={'transparent'}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  placeholder="Search issue"
                  border={'none'}
                  borderBottom={'1px solid blue'}
                />
              </InputText.FormControl>
            </InputText>

            <List spacing={4}>
              {state.context?.issueList?.map((issue: fromInterface.IIssue) => {
                return (
                  <ListItem key={issue.id}>
                    <Link
                      textDecoration="none"
                      _hover={{
                        textDecoration: 'none',
                      }}
                      as={ReachLink}
                      to={`${RouteEnum.PROJECTBOARD}/${RouteEnum.ISSUE_DETAIL}/${issue?.id}`}
                    >
                      <Flex gap={4} alignItems="start">
                        <TypeIcon type={issue?.type?.name as string} />
                        <Flex direction="column">
                          <Text noOfLines={1}>{issue.title}</Text>
                          <Text>
                            {issue?.type?.name as string}-{issue.id}
                          </Text>
                        </Flex>
                      </Flex>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default IssueSearchPage;
