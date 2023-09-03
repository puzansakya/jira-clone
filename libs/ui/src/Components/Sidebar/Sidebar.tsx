import { AddIcon, QuestionOutlineIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, VStack } from '@chakra-ui/react';


export const Logo = (props:any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 75.76 75.76"
        width={28}
        {...props}
    >
      <defs>
        <linearGradient
            id="linear-gradient"
            x1={34.64}
            y1={15.35}
            x2={19}
            y2={30.99}
            gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.18} stopColor="rgba(0, 82, 204, 0.2)" />
          <stop offset={1} stopColor="#DEEBFE" />
        </linearGradient>
        <linearGradient
            id="linear-gradient-2"
            x1={38.78}
            y1={60.28}
            x2={54.39}
            y2={44.67}
            xlinkHref="#linear-gradient"
        />
      </defs>
      <title>{"Jira Software-blue"}</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Blue">
          <path
              d="M72.4,35.76,39.8,3.16,36.64,0h0L12.1,24.54h0L.88,35.76A3,3,0,0,0,.88,40L23.3,62.42,36.64,75.76,61.18,51.22l.38-.38L72.4,40A3,3,0,0,0,72.4,35.76ZM36.64,49.08l-11.2-11.2,11.2-11.2,11.2,11.2Z"
              style={{
                fill: "rgb(222, 235, 254)",
              }}
          />
          <path
              d="M36.64,26.68A18.86,18.86,0,0,1,36.56.09L12.05,24.59,25.39,37.93,36.64,26.68Z"
              style={{
                fill: "url(&quot",
              }}
          />
          <path
              d="M47.87,37.85,36.64,49.08a18.86,18.86,0,0,1,0,26.68h0L61.21,51.19Z"
              style={{
                fill: "url(&quot",
              }}
          />
        </g>
      </g>
    </svg>
);
export const Sidebar = ({ handleOpenCreateIssueModal, onOpenIssueSearchModal }: any) => {
  return (
    <Flex
      role="group"
      overflow="hidden"
      direction="column"
      alignItems="start"
      pl={4}
      justifyContent="space-between"
      bg="brand.primary"
      w={14}
      position="fixed"
      top={0}
      bottom={0}
      _hover={{
        w: 40,
        boxShadow: 'dark-lg',
      }}
      transitionProperty="all"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="150ms"
      flexShrink={0}
    >
      <VStack pb={12} pt={5} alignItems="center " spacing={5}>
        {/*<Box bg="gray.100" h={6} w={6} borderRadius="full"></Box>*/}

        <Logo />
        {/* <Flex gap={5}> */}
        <AddIcon
          onClick={handleOpenCreateIssueModal}
          h={5}
          w={5}
          color="gray.100"
        />
        {/* <Text
            right={"12px"}
            visibility="hidden"
            opacity={0}
            transition="all .1s"
            transitionDelay=".1s"
            transitionProperty={' all'}
            _groupHover={{
              right: 0,
              visibility: 'visible',
              opacity: 1,
            }}
            color={'gray.100'}
            textTransform="capitalize"
          >
            Create Issue
          </Text> */}
        {/* </Flex> */}
        <SearchIcon
          onClick={onOpenIssueSearchModal}
          h={5}
          w={5}
          color="gray.100"
        />
      </VStack>
      <Flex py={5} direction="column" alignItems="center">
        <QuestionOutlineIcon h={5} w={5} color="gray.100" />
      </Flex>
    </Flex>
  );
};
