import { Box, Flex, FormLabel } from '@chakra-ui/react';
import React from 'react';

interface RenderWithLabelPositionProps {
  labelPosition?: string;

  label: any;

  optionalPrompt?: any;

  errorPrompt?: any;

  inputComponent?: any;
}

export const RenderWithLabelPosition = (
  props: RenderWithLabelPositionProps
) => {
  const { labelPosition, label, optionalPrompt, errorPrompt, inputComponent } =
    props;

  if (labelPosition === 'left') {
    return (
      <Flex gap="15px" alignItems="flex-start">
        {/* RENDER LABEL */}
        <Flex gap={1} p="10px 0" mb="0">
          {label}
          {optionalPrompt && optionalPrompt}
        </Flex>
        {/* ./RENDER LABEL */}

        <Box>
          {inputComponent}
          {errorPrompt && errorPrompt}
        </Box>
      </Flex>
    );
  }

  return (
    <Flex gap={1} direction="column">
      {/* RENDER LABEL */}
      <Flex gap={1} mb="0" alignItems="center">
        {label}
        {optionalPrompt}
      </Flex>
      {/* ./RENDER LABEL */}

      <Box>
        {inputComponent}
        {errorPrompt}
      </Box>
    </Flex>
  );
};

export default RenderWithLabelPosition;
