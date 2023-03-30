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
import React from 'react';
import useFlexGridMaker from '../../../Hooks/useFLexGridMaker/useFLexGridMaker';
import { DateCell } from './DateCell';
import Header from './Header';

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
      <Header />
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
          return (
            <DateCell
              key={day.toString()}
              day={day}
              selectedDay={selectedDay}
              firstDayCurrentMonth={firstDayCurrentMonth}
              setSelectedDay={setSelectedDay}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
