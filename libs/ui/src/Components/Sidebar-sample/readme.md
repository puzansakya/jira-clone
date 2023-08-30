```jsx
import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { TbMovie } from 'react-icons/tb'
import { BiChevronDown } from 'react-icons/bi'
import { BsCollectionPlay, BsChevronDown } from 'react-icons/bs'
import { LiaHomeSolid } from 'react-icons/lia'
import {
  AiOutlinePlaySquare,
  AiOutlinePlayCircle,
  AiOutlineClockCircle,
} from 'react-icons/ai'
import { GoHistory, GoThumbsup } from 'react-icons/go'
import { PhoneIcon, BellIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {
  Flex,
  Divider,
  Box,
  Container,
  Button,
  useDisclosure,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

// STYLES
const SIDEBAR_BG = '#0F0F0F'
const DIVIDER_BG = '#ffffff33'
const TEXT_COLOR = 'gray.50'
const SIDEBAR_ITEM_HOVER_BG = '#ffffff1a'
const ICON_SIZE = '20px'

interface MapperProps {
  components: {
    wrapper: JSX.Element,
    item: JSX.Element,
  };
  data: any[];
}
export const Mapper = ({ components, data }: MapperProps) => {
  return (
    <components.wrapper>
      {data.map((data: any) => {
        return <components.item key={data.id} item={data} />
      })}
    </components.wrapper>
  )
}

export const PxSidebarTitle = () => {
  return
}

export const PxDivider = () => {
  return (
    <Box px={4}>
      <Box h={'.5px'} bg={DIVIDER_BG} />
    </Box>
  )
}

export interface PxSidebarPanelProps {}
export const PxSidebarPanel = (props: PxSidebarPanelProps) => {
  const { children, ...rest } = props
  return <Box p={4}>{children}</Box>
}

export const PxSidebarItem = (props: any) => {
  const { icon, label, onClick } = props
  return (
    <Flex
      rounded="md"
      gap={4}
      alignItems="center"
      px={4}
      py={2}
      cursor="pointer"
      transition="all"
      transitionDuration={'200ms'}
      _hover={{
        bg: SIDEBAR_ITEM_HOVER_BG,
      }}
      onClick={onClick}
    >
      {icon}
      {label}
    </Flex>
  )
}

const firstItemGroup = [
  {
    id: 1,
    label: 'Home',
    icon: <LiaHomeSolid size={ICON_SIZE} />,
  },
  {
    id: 2,
    label: 'Shorts',
    icon: <TbMovie size={ICON_SIZE} />,
  },
  {
    id: 3,
    label: 'Subscription',
    icon: <BsCollectionPlay size={ICON_SIZE} />,
  },
]

const secondItemGroup = [
  {
    id: 1,
    label: 'Library',
    icon: <AiOutlinePlaySquare size={ICON_SIZE} />,
  },
  {
    id: 2,
    label: 'History',
    icon: <GoHistory size={ICON_SIZE} />,
  },
  {
    id: 3,
    label: 'Your Videos',
    icon: <AiOutlinePlayCircle size={ICON_SIZE} />,
  },
  {
    id: 4,
    label: 'Watch Later',
    icon: <AiOutlineClockCircle size={ICON_SIZE} />,
  },
  {
    id: 5,
    label: 'Liked Videos',
    icon: <GoThumbsup size={ICON_SIZE} />,
  },
  {
    id: 6,
    label: 'Show More',
    icon: <BsChevronDown size={ICON_SIZE} />,
  },
]

export const PxDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW={56} w={56} bg={SIDEBAR_BG} color={TEXT_COLOR}>
          <DrawerBody p={0}>
            <Mapper
              data={firstItemGroup}
              components={{
                wrapper: PxSidebarPanel,
                item: ({ item }) => {
                  return (
                    <PxSidebarItem
                      label={item.label}
                      icon={item.icon}
                      onClick={() => {
                        onClose()
                      }}
                    />
                  )
                },
              }}
            />

            <PxDivider />

            <Mapper
              data={secondItemGroup}
              components={{
                wrapper: PxSidebarPanel,
                item: ({ item }) => {
                  return (
                    <PxSidebarItem
                      label={item.label}
                      icon={item.icon}
                      onClick={() => {
                        onClose()
                      }}
                    />
                  )
                },
              }}
            />

            <PxDivider />

            <Mapper
              data={firstItemGroup}
              components={{
                wrapper: PxSidebarPanel,
                item: ({ item }) => {
                  return (
                    <PxSidebarItem
                      label={item.label}
                      icon={item.icon}
                      onClick={() => {
                        onClose()
                      }}
                    />
                  )
                },
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const App = () => {
  return (
    <Container
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      maxW="sm"
      minH="100vh"
      overflowY="auto"
    >
      <PxDrawer />
    </Container>
  )
}

```