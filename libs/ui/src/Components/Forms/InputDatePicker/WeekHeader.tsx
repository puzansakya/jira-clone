import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import useFlexGridMaker from '../../../Hooks/useFLexGridMaker/useFLexGridMaker';

const WeekHeader = () => {
  const { ROW_NEGATIVE_MARGIN, EACH_COL_WIDTH, GUTTER_WIDTH } =
    useFlexGridMaker();

  return (
    <Flex
      wrap="wrap"
      mx={ROW_NEGATIVE_MARGIN}
      fontSize="sm"
      textAlign="center"
      color="gray.500"
    >
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>S</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>M</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>T</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>W</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>T</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>F</Box>
      </Box>
      <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
        <Box p={4}>S</Box>
      </Box>
    </Flex>
  );
};

export default WeekHeader;
