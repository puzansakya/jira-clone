import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup, Flex, IconButton, Text } from '@chakra-ui/react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday,
  toDate,
} from 'date-fns';
import React from 'react';
import useFlexGridMaker from '../../../Hooks/useFLexGridMaker/useFLexGridMaker';
import { DateCell } from './DateCell';
import WeekHeader from './WeekHeader';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as bs from 'bikram-sambat';

/* eslint-disable-next-line */
export interface DatePickerProps {
  isNepali: boolean;
}

const Header = (props: {
  firstDayCurrentMonth: any;
  previousMonth: any;
  nextMonth: any;
}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="lg" fontWeight="semibold" color="gray.900">
        {format(props.firstDayCurrentMonth, 'MMMM yyyy')}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton
          aria-label="previous month"
          icon={<ChevronLeftIcon />}
          onClick={props.previousMonth}
        />
        <IconButton
          aria-label="next month"
          icon={<ChevronRightIcon />}
          onClick={props.nextMonth}
        />
      </ButtonGroup>
    </Flex>
  );
};

export const InputDatePicker = ({ isNepali }: DatePickerProps) => {
  const { ROW_NEGATIVE_MARGIN, EACH_COL_WIDTH, GUTTER_WIDTH } =
    useFlexGridMaker();

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = React.useState(today);
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, 'MMM-yyyy')
  );
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  let days: any = [];
  let startOffsetDays = 0;

  if (isNepali) {
    const { start, end } = getDateFnsFirstAndLastDayForCurrentNepaliMonth();
    days = eachDayOfInterval({
      start: start,
      end: end,
    });
    startOffsetDays = getCurrentDayNumberForNepaliDate();
  } else {
    days = eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: endOfMonth(firstDayCurrentMonth),
    });
    startOffsetDays = getDay(days[0]);
  }

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
      <Header
        firstDayCurrentMonth={firstDayCurrentMonth}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <WeekHeader />
      <Flex
        wrap="wrap"
        mx={ROW_NEGATIVE_MARGIN}
        fontSize="sm"
        textAlign="center"
        color="gray.500"
      >
        {Array.from({ length: startOffsetDays }).map(() => {
          return (
            <Box w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
              <Box p={4}> </Box>
            </Box>
          );
        })}

        {days.map((day: any) => {
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

function getCurrentNepaliMonth() {
  const { year, month } = bs.toBik(new Date());
  const daysInMonth = bs.daysInMonth(year, month);
  const nepaliDate = Array.from({ length: daysInMonth }).map((date, idx) => {
    return `${year}-${month}-${idx + 1}`;
  });

  return nepaliDate;
}

function getDateFnsFirstAndLastDayForCurrentNepaliMonth() {
  const nepaliDate = getCurrentNepaliMonth();

  const splitedStart = nepaliDate[0].split('-');
  const splitedEnd = nepaliDate[nepaliDate?.length - 1].split('-');

  const convertedToEngStart = bs.toGreg(...splitedStart);
  const convertedToEngEnd = bs.toGreg(...splitedEnd);

  return {
    start: toDate(
      new Date(
        convertedToEngStart.year,
        convertedToEngStart.month - 1,
        convertedToEngStart.day
      )
    ),
    end: toDate(
      new Date(
        convertedToEngEnd.year,
        convertedToEngEnd.month - 1,
        convertedToEngEnd.day
      )
    ),
  };
}

function getCurrentDayNumberForNepaliDate() {
  const splited = getCurrentNepaliMonth()[0].split('-');
  const { year, month, day } = bs.toGreg(...splited);
  const date = toDate(new Date(year, month - 1, day));
  return getDay(date);
}
