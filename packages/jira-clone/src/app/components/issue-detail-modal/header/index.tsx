import React from 'react';
import { Button, Flex, HStack, IconButton } from '@chakra-ui/react';
import { CloseIcon, DeleteIcon } from '@chakra-ui/icons';

const DetailHeader = ({ onClose }: any) => {
  return (
    <Flex w="full" justifyContent="space-between">
      <Button
        bg="white"
        size="sm"
        fontWeight="normal"
        fontSize="sm"
        borderRadius="sm"
      >
        Task-123456
      </Button>
      <HStack spacing={2}>
        <Button
          bg="white"
          size="sm"
          fontWeight="normal"
          fontSize="sm"
          onClick={onClose}
          borderRadius="sm"
        >
          Give Feedback
        </Button>
        <Button
          bg="white"
          fontSize="sm"
          size="sm"
          fontWeight="normal"
          onClick={onClose}
          borderRadius="sm"
        >
          Copy Link
        </Button>
        <IconButton
          bg="white"
          size="sm"
          fontWeight="normal"
          fontSize="sm"
          aria-label="delete"
          icon={<DeleteIcon />}
        />
        <IconButton
          bg="white"
          size="sm"
          fontWeight="normal"
          fontSize="sm"
          aria-label="close"
          onClick={onClose}
          icon={<CloseIcon />}
        />
      </HStack>
    </Flex>
  );
};

export default DetailHeader;
