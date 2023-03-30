import React, { useCallback } from 'react';

//CHAKRA
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
  Text,
} from '@chakra-ui/react';

//SCSS
import './stepper.scss';

//ICONS
import { BsCheckLg } from 'react-icons/bs';

//INTERFACE
export interface IRigoStepperData {
  label: string;
  content?: JSX.Element;
}

interface IStepperProps extends Omit<TabsProps, 'children'> {
  data: IRigoStepperData[];
  onChange: (index: number) => void;
  children?: any;
  completedIndex?: number;
}

/**
 * 1. Define Context
 * 2. Define Parent Component
 * 3. Define usable hook
 * 4. Define required child component
 * 5. Define next button
 * 6. Define previous button
 */

// 1.
const StepperContext = React.createContext<IStepperProps>({
  data: [],
  isLazy: false,
  align: 'end',
  size: 'sm',
  index: 0,
  completedIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (index) => {},
});

StepperContext.displayName = 'StepperContext';

// 2.
export const NewStepper = (props: IStepperProps) => {
  const {
    data,
    isLazy = false,
    align,
    size = 'sm',
    onChange,
    index,
    completedIndex,
    children,
  } = props;

  return (
    <StepperContext.Provider
      value={{
        data,
        isLazy,
        align,
        size,
        index,
        onChange,
        completedIndex,
      }}
    >
      <Box className="rigo-stepper">
        <Tabs
          {...{ align, isLazy, size, onChange }}
          index={index}
          isFitted
          border="none"
        >
          {children}
        </Tabs>
      </Box>
    </StepperContext.Provider>
  );
};

// 3.
const useStepper = () => {
  const context = React.useContext(StepperContext);
  if (context === undefined) {
    throw new Error('useStepper must be used within a <Stepper />');
  }
  return context;
};

// 4.
export const StepperList = () => {
  const { data, index: activeIndex, completedIndex } = useStepper();

  console.log({ completedIndex });
  const isCompleted = useCallback(
    (completedIndex: number, tabIndex: number) => {
      return (
        (completedIndex && completedIndex > tabIndex) ||
        Number(activeIndex) > tabIndex
      );
    },
    [completedIndex, activeIndex]
  );

  const isActive = useCallback(
    (tabIndex: number) => {
      return activeIndex === tabIndex;
    },
    [activeIndex]
  );

  return (
    <TabList
      bgColor="#fff"
      border="none"
      className="stepper"
      alignItems="flex-start"
    >
      {data.map((tab, tabIndex) => (
        <Tab
          key={tabIndex}
          isDisabled={tabIndex > Number(activeIndex)}
          padding="0"
          border="none"
          color="gray.500"
          className={`stepper-tab  ${
            isActive(tabIndex)
              ? 'isactive'
              : isCompleted(completedIndex as number, tabIndex)
              ? 'iscompleted'
              : ''
          }`}
        >
          <Box textAlign="center" className="stepper-list">
            <Box
              position="relative"
              zIndex={1}
              className="stepper-icon"
              margin="0 auto"
              width="35px"
              height="35px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              mb="4px"
            >
              {isCompleted(completedIndex as number, tabIndex) ? (
                <BsCheckLg fill="#fff" size="12px" fontSize="10px" />
              ) : (
                <Box color="#fff">{tabIndex + 1}</Box>
              )}
            </Box>
            <Text fontSize="14px" fontWeight="500" className="stepper-title">
              {tab.label}
            </Text>
          </Box>
        </Tab>
      ))}
    </TabList>
  );
};

export const StepperPanel = () => {
  const { data } = useStepper();
  return (
    <TabPanels padding="40px 0 0 ">
      {data.map((tab, index) => (
        <TabPanel key={index} p="0">
          {tab.content}
        </TabPanel>
      ))}
    </TabPanels>
  );
};

// 5.
export const NextButton = () => {
  const { data } = useStepper();
  return null;
};
// 6.
export const PreviousButton = () => {
  const { data } = useStepper();
  return null;
};

export const Stepper = (props: IStepperProps) => {
  const {
    data,
    isLazy = false,
    align,
    size = 'sm',
    onChange,
    index: activeIndex,
  } = props;

  const isActive = useCallback(
    (tabIndex: number) => {
      return activeIndex === tabIndex;
    },
    [activeIndex]
  );

  const isCompleted = useCallback(
    (tabIndex: number) => {
      return Number(activeIndex) > tabIndex;
    },
    [activeIndex]
  );

  return (
    <Box className="rigo-stepper">
      <Tabs
        {...{ align, isLazy, size, onChange }}
        index={activeIndex}
        isFitted
        border="none"
      >
        <TabList
          bgColor="#fff"
          border="none"
          className="stepper"
          alignItems="flex-start"
        >
          {data.map((tab, tabIndex) => (
            <Tab
              key={tabIndex}
              isDisabled={tabIndex > Number(activeIndex)}
              padding="0"
              border="none"
              color="gray.500"
              className={`stepper-tab  ${
                isActive(tabIndex)
                  ? 'isactive'
                  : isCompleted(tabIndex)
                  ? 'iscompleted'
                  : ''
              }`}
            >
              <Box textAlign="center" className="stepper-list">
                <Box
                  position="relative"
                  zIndex={1}
                  className="stepper-icon"
                  margin="0 auto"
                  width="35px"
                  height="35px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  mb="4px"
                >
                  {isCompleted(tabIndex) ? (
                    <BsCheckLg fill="#fff" size="12px" fontSize="10px" />
                  ) : (
                    <Box color="#fff">{tabIndex + 1}</Box>
                  )}
                </Box>
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  className="stepper-title"
                >
                  {tab.label}
                </Text>
              </Box>
            </Tab>
          ))}
        </TabList>
        <TabPanels padding="40px 0 0 ">
          {data.map((tab, index) => (
            <TabPanel key={index} p="0">
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Stepper;
