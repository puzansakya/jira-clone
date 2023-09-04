import {
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex,
    Link, List, ListItem, Text
} from '@chakra-ui/react';

import {useMachine} from '@xstate/react';
import {Link as ReachLink, useNavigate} from 'react-router-dom';
import {DebouncedInput} from 'ui';
import {RouteEnum} from '../../routes/routeEnum';
import {TypeIcon} from '../project-board/card';
import {machine} from './machine';
import InputText from "../../../../../../libs/ui/src/Components/Forms/InputText/InputText";

export const IssueSearchPage = () => {
    const navigate = useNavigate();

    const [state, send] = useMachine(machine);

    const handleClose = () => {
        navigate(RouteEnum.PROJECTBOARD);
    };

    return (
        <Drawer isOpen={true} placement="left" onClose={handleClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Search Issue</DrawerHeader>

                <DrawerBody>
                    <Flex direction={"column"} gap={10}>

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
                                    borderRadius={"none"}
                                    bg={"transparent"}
                                    _focus={{
                                        boxShadow: "none",
                                    }}
                                    placeholder="Search issue"
                                    border={"none"}
                                    borderBottom={"1px solid blue"}
                                />
                            </InputText.FormControl>
                        </InputText>


                        <List spacing={4}>
                            {state.context?.issueList?.map((issue: any) => {
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
                                                <TypeIcon type={issue?.type?.name}/>
                                                <Flex direction="column">
                                                    <Text noOfLines={1}>{issue.title}</Text>
                                                    <Text>
                                                        {issue?.type?.name}-{issue.id}
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
