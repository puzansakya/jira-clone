import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    List,
    ListItem,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {CalendarIcon} from "@chakra-ui/icons";

/* eslint-disable-next-line */
export interface SidebarProps {
}

export const SiddbarContext = React.createContext<any>({
    // on: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // toggle: () => {},
});
SiddbarContext.displayName = 'SiddbarContext';

export const useSidebar = () => {
    const context = React.useContext(SiddbarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a <Sidebar />');
    }
    return context;
};

export const SidebarRoot = ({children}: any) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <SiddbarContext.Provider value={{isOpen, onOpen, onClose}}>
            {children}
        </SiddbarContext.Provider>
    );
};

export const SidebarLink = ({children, onClick: _onClick, ...rest}: any) => {
    const {onClose} = useSidebar();
    return (
        <Button
            onClick={() => {
                _onClick?.();
                onClose();
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export const SidebarCloseButton = ({
                                       children,
                                       onClick: _onClick,
                                       ...rest
                                   }: any) => {
    const {onClose} = useSidebar();
    return (
        <Button
            onClick={() => {
                _onClick?.();
                onClose();
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export const SidebarTrigger = (props: any) => {
    const {onOpen} = useSidebar();
    return (
        <Button colorScheme="teal" onClick={onOpen} {...props}>
            Open
        </Button>
    );
};

export const SidebarDrawer = ({children, ...rest}: any) => {
    const {isOpen, onClose} = useSidebar();
    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} {...rest}>
            {children}
        </Drawer>
    );
};

export function SidebarSample(props: SidebarProps) {
    return (
        <SidebarRoot>
            <SidebarTrigger/>
            <SidebarDrawer>
                <DrawerOverlay/>
                <DrawerContent w={56} maxW={56} p={0}>
                    {/*<DrawerCloseButton />*/}
                    {/*<DrawerHeader>Sidebar Header</DrawerHeader>*/}

                    <DrawerBody p={0}>
                        {/*<List as={Flex} gap={2} flexDirection="column">*/}
                        {/*  <SidebarLink*/}
                        {/*    as={ListItem}*/}
                        {/*    onClick={() => {*/}
                        {/*      console.log('1');*/}
                        {/*    }}*/}
                        {/*  >*/}
                        {/*    <Text>option 1</Text>*/}
                        {/*  </SidebarLink>*/}
                        {/*  <SidebarLink*/}
                        {/*    onClick={() => {*/}
                        {/*      console.log('1');*/}
                        {/*    }}*/}
                        {/*    as={ListItem}*/}
                        {/*  >*/}
                        {/*    <Text>Option 2</Text>*/}
                        {/*  </SidebarLink>*/}
                        {/*</List>*/}

                        <SidebarMenuPanel>
                            <SidebarMenuItem
                                icon={<CalendarIcon/>}
                                label="Home"
                            />
                            <SidebarMenuItem
                                icon={<CalendarIcon/>}
                                label="Shorts"
                            />
                            <SidebarMenuItem
                                icon={<CalendarIcon/>}
                                label="Subscriptions"
                            />
                        </SidebarMenuPanel>
                    </DrawerBody>

                    <DrawerFooter>
                        <SidebarCloseButton variant="outline" mr={3}>
                            Cancel
                        </SidebarCloseButton>

                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </SidebarDrawer>
        </SidebarRoot>
    );
}


// COMPONENTS

export const SidebarMenuItem = (props: any) => {
    const {label, icon} = props
    return <Flex
        w={"full"}
        cursor="pointer"
        alignItems="center"
        gap={4}
        rounded="lg"
        p={2}
        transition="a11"
        transitionDuration={"100"}
        _hover={{
            background: "gray.800"
        }}
        id="sidebar-item"
    >
        {icon}
        <Text>{label}</Text>
    </Flex>
}

export const SidebarMenuPanel = (props: any) => {
    const {children} = props
    return <Box px={4} py={2} bg={"red.100"} w={"full"}>
        {children}
    </Box>
}

export const Divider = () => {
    return
}
export default SidebarSample;
