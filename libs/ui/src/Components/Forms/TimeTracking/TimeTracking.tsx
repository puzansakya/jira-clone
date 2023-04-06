import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { TimeIcon } from '@chakra-ui/icons';

export const TimeTracking = ({
  value = {
    timeSpent: 0,
    timeEstimated: 0,
  },
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [progress, setProgress] = React.useState();
  const [localValue, setLocalValue] = React.useState<any>({});

  const calculatePercentage = (value: any) =>
    (value?.timeSpent / value?.timeEstimated) * 100;

  React.useEffect(() => {
    const progressValue: any = calculatePercentage(value);
    setProgress(progressValue);
    setLocalValue(value);
  }, [value]);

  React.useEffect(() => {
    const progressValue: any = calculatePercentage(localValue);
    setProgress(progressValue);
  }, [localValue]);

  const handleTimeInputChange = (evt: any) => {
    const { name, value } = evt.target;

    setLocalValue((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Box width="343px">
        <Text fontWeight={500}>Time Tracking</Text>
        <HStack
          spacing={2}
          mt={2}
          alignItems="start"
          _hover={{ bg: 'gray.100' }}
          p={2}
          onClick={onOpen}
        >
          <TimeIcon h={5} w={5} />
          <Box width="full">
            <Progress value={progress} size="xs" />

            <Flex justifyContent="space-between" mt={1}>
              <Text fontSize="sm" color="#172B4D">
                {value.timeSpent}h logged
              </Text>
              <Text fontSize="sm" color="#172B4D">
                {value.timeEstimated}h estimated
              </Text>
            </Flex>
          </Box>
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Time Tracking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={2} mt={2} alignItems="start" p={2}>
              <TimeIcon h={5} w={5} />
              <Box width="full">
                <Progress value={progress} size="xs" />

                <Flex justifyContent="space-between" mt={1}>
                  <Text fontSize="sm" color="#172B4D">
                    {localValue.timeSpent}h logged
                  </Text>
                  <Text fontSize="sm" color="#172B4D">
                    {localValue.timeEstimated}h estimated
                  </Text>
                </Flex>
              </Box>
            </HStack>
            <HStack spacing={2} my={5}>
              <FormControl>
                <FormLabel htmlFor="email">Time Spent (hours)</FormLabel>
                <Input
                  id="timeSpent"
                  borderRadius="sm"
                  size="sm"
                  name="timeSpent"
                  onChange={handleTimeInputChange}
                  type="number"
                  value={localValue.timeSpent}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Time remaining (hours)</FormLabel>
                <Input
                  id="timeRemaining"
                  name="timeEstimated"
                  borderRadius="sm"
                  size="sm"
                  onChange={handleTimeInputChange}
                  type="number"
                />
              </FormControl>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="brand.secondary"
              _hover={{ bg: 'brand.primary' }}
              size="sm"
              fontWeight="normal"
              color="white"
              type="submit"
              borderRadius="sm"
              onClick={onClose}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TimeTracking;
