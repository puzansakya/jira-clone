import React from 'react';
import { Button, ChakraProvider, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import {
  IRigoStepperData,
  NewStepper,
  Stepper,
  StepperList,
  StepperPanel,
} from './Stepper';

const tabsOptions: IRigoStepperData[] = [
  {
    label: 'One',
    content: <p>I am first component</p>,
  },
  {
    label: 'Two',
    content: <p>I am second component</p>,
  },
  {
    label: 'Three',
    content: <p>I am third component</p>,
  },
];

const Story: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: (args) => {
    return <StepperUsuage />;
  },
};
export default Story;

export const Default = {
  args: {},
};

const StepperUsuage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <ChakraProvider>
      <NewStepper
        index={currentIndex} //make it dynamic
        completedIndex={2} //make it dynamic
        data={tabsOptions}
        onChange={(index: number) => {
          setCurrentIndex(index);
        }}
      >
        {currentIndex}
        <StepperList />
        <Flex gap={4} justifyContent="center">
          <Button
            onClick={() => {
              if (currentIndex === 0) {
                return;
              }
              const next = currentIndex - 1;
              setCurrentIndex(next);
            }}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              if (currentIndex === tabsOptions?.length - 1) {
                return;
              }
              const next = currentIndex + 1;
              setCurrentIndex(next);
            }}
          >
            Next
          </Button>
        </Flex>
        <StepperPanel />
      </NewStepper>
    </ChakraProvider>
  );
};
