import {
  Box,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle
} from '@chakra-ui/react';

export const IssueDetailLoader = () => {
   const largeHeight = "24px"
   const smallerheight = "16px"
   const startColor = "gray.300"
   const endColor = "gray.100"
    
   return (
    <HStack spacing={10} alignItems="start">
      <Box  width="60%" flexShrink={0}>
        <Flex direction={'column'} gap={2}>
          <Skeleton w="full" height={largeHeight} startColor={startColor} endColor={endColor} />
          <Skeleton w="80%" height={largeHeight} startColor={startColor} endColor={endColor} />
        </Flex>
        <Flex mt={5} direction={'column'} gap={2}>
          <Skeleton w="90%" height={smallerheight} startColor={startColor} endColor={endColor} />
          <Skeleton w="full" height={smallerheight} startColor={startColor} endColor={endColor} />
          <Skeleton w="70%" height={smallerheight} startColor={startColor} endColor={endColor} />
        </Flex>
        <Skeleton mt={8} w="60%" height={smallerheight} startColor={startColor} endColor={endColor} />
        
        <Flex mt={5} alignItems="center" gap={5}>
          <SkeletonCircle flexShrink={0} size="10" startColor={startColor} endColor={endColor} />
          <Skeleton w="full" height={largeHeight} startColor={startColor} endColor={endColor} />
        </Flex>
      </Box>

      <Box w="full">

      <Flex direction={'column'} gap={4}>
          <Skeleton w="50%" height={smallerheight} startColor={startColor} endColor={endColor} />
          <Skeleton w="full" height={largeHeight} startColor={startColor} endColor={endColor} />
        </Flex>

        <Flex direction={'column'} gap={4} mt={8}>
          <Skeleton w="50%" height={smallerheight} startColor={startColor} endColor={endColor} />
          <Skeleton w="full" height={largeHeight} startColor={startColor} endColor={endColor} />
        </Flex>

        <Flex direction={'column'} gap={4} mt={8}>
          <Skeleton w="50%" height={smallerheight} startColor={startColor} endColor={endColor} />
          <Skeleton w="full" height={largeHeight} startColor={startColor} endColor={endColor} />
        </Flex>
      </Box>
    </HStack>
  );
};
