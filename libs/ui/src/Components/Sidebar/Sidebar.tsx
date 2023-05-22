import {
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
import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SidebarProps {}

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

export const SidebarRoot = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SiddbarContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </SiddbarContext.Provider>
  );
};

export const SidebarLink = ({ children, onClick: _onClick, ...rest }: any) => {
  const { onClose } = useSidebar();
  return (
    // <NavLink
    //   onClick={() => {
    //     _onClick?.();
    //     onClose();
    //   }}
    //   {...rest}
    // >
    //   {children}
    // </NavLink>
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
  const { onClose } = useSidebar();
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
  const { onOpen } = useSidebar();
  return (
    <Button colorScheme="teal" onClick={onOpen} {...props}>
      Open
    </Button>
  );
};

export const SidebarDrawer = ({ children, ...rest }: any) => {
  const { isOpen, onClose } = useSidebar();
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} {...rest}>
      {children}
    </Drawer>
  );
};

export function Sidebar(props: SidebarProps) {
  return (
    <SidebarRoot>
      <SidebarTrigger />
      <SidebarDrawer>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sidebar Header</DrawerHeader>

          <DrawerBody>
            <List as={Flex} gap={2} flexDirection="column">
              <SidebarLink
                as={ListItem}
                onClick={() => {
                  console.log('1');
                }}
              >
                <Text>option 1</Text>
              </SidebarLink>
              <SidebarLink
                onClick={() => {
                  console.log('1');
                }}
                as={ListItem}
              >
                <Text>Option 2</Text>
              </SidebarLink>
            </List>
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

export default Sidebar;
