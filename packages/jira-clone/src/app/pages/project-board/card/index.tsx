// LIBS
import {ArrowUpIcon, CheckCircleIcon} from '@chakra-ui/icons';
import {Avatar, Box, Flex, HStack, Text, Link} from '@chakra-ui/react';
import {Draggable} from 'react-beautiful-dnd';
import {
    Link as ReachLink,
} from "react-router-dom";
import {RouteEnum} from "../../../routes/routeEnum";


const Card = (props: any) => {
    return (
        <Draggable draggableId={props.block?.id + ''} index={props.index}>
            {(provided: any, snapshot: any) => {
                return (

                    <Link as={ReachLink}
                          to={`${RouteEnum.ISSUE_DETAIL}/${props.block?.id}`}

                    >
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            aria-roledescription="Press space bar to lift the block"
                        >
                            <Box
                                w="full"
                                mb="2"
                                border="1px"
                                cursor="pointer"
                                borderColor="gray.300"
                                bg={`${snapshot.isDragging ? 'gray.100' : 'white'}`}
                                p={3}
                                borderRadius="sm"
                                shadow="sm"
                                _hover={{bg: 'gray.50'}}
                            >
                                <Text textDecoration="none" _hover={{
                                    textDecoration:"none"
                                }} fontSize="sm">
                                    {props.block.descriptionText}
                                </Text>

                                <Flex
                                    justifyContent="space-between"
                                    mt={3}
                                    alignItems="center"
                                >
                                    <HStack spacing={1}>
                                        <CheckCircleIcon
                                            h={4}
                                            w={4}
                                            color="blue.500"
                                        />
                                        <ArrowUpIcon
                                            h={4}
                                            w={4}
                                            color="red.500"
                                        />
                                    </HStack>
                                    <Avatar
                                        size="xs"
                                        name={`${props.block.reporter?.firstName} ${props.block.reporter?.lastName}`}
                                        src={props.block.reporter?.avatar}
                                    />
                                </Flex>
                            </Box>
                        </div>
                    </Link>

                );
            }}
        </Draggable>
    );
};

export default Card;
