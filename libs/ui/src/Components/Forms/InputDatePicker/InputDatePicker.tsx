import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns';
import useFlexGridMaker from '../../../Hooks/useFLexGridMaker/useFLexGridMaker';
import React from 'react';

/* eslint-disable-next-line */
export interface DatePickerProps {}

export const InputDatePicker = () => {
  const { ROW_NEGATIVE_MARGIN, EACH_COL_WIDTH, GUTTER_WIDTH } =
    useFlexGridMaker();

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = React.useState(today);
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, 'MMM-yyyy')
  );
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <Flex direction="column" gap={4} maxW="500px">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="semibold" color="gray.900">
          {format(firstDayCurrentMonth, 'MMMM yyyy')}
        </Text>
        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton
            aria-label="previous month"
            icon={<ChevronLeftIcon />}
            onClick={previousMonth}
          />
          <IconButton
            aria-label="next month"
            icon={<ChevronRightIcon />}
            onClick={nextMonth}
          />
        </ButtonGroup>
      </Flex>
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
      <Flex
        wrap="wrap"
        mx={ROW_NEGATIVE_MARGIN}
        fontSize="sm"
        textAlign="center"
        color="gray.500"
      >
        {Array.from({ length: getDay(days[0]) }).map(() => {
          return (
            <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
              <Box p={4}> </Box>
            </Box>
          );
        })}

        {days.map((day) => {
          const sx = {
            w: 8,
            h: 10,
            rounded: 'full',
            background: 'transparent',
            ...(isEqual(day, selectedDay) && { color: 'white' }),
            ...(!isEqual(day, selectedDay) &&
              isToday(day) && { color: 'red.500' }),
            ...(!isEqual(day, selectedDay) &&
              !isToday(day) &&
              isSameMonth(day, firstDayCurrentMonth) && {
                color: 'gray.900',
              }),
            ...(!isEqual(day, selectedDay) &&
              !isToday(day) &&
              !isSameMonth(day, firstDayCurrentMonth) && {
                color: 'gray.400',
              }),

            ...(isEqual(day, selectedDay) &&
              isToday(day) && {
                background: 'red.500',
                _hover: {
                  background: 'red.500',
                },
              }),
            ...(isEqual(day, selectedDay) &&
              !isToday(day) && {
                background: 'gray.900',
                _hover: {
                  background: 'gray.900',
                },
              }),
            ...(!isEqual(day, selectedDay) && {
              _hover: {
                background: 'gray.200',
              },
            }),
            ...((isEqual(day, selectedDay) || isToday(day)) && {
              fontWeight: 'semibold',
            }),
          };
          return (
            <Box
              key={day.toString()}
              w={EACH_COL_WIDTH}
              px={GUTTER_WIDTH}
              py={2}
            >
              <Button
                type="button"
                sx={sx}
                onClick={() => {
                  console.log({
                    day,
                  });
                  return setSelectedDay(day);
                }}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
