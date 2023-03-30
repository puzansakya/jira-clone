import { Box, Button } from '@chakra-ui/react';
import { format, isEqual, isSameMonth, isToday } from 'date-fns';
import useFlexGridMaker from '../../../Hooks/useFLexGridMaker/useFLexGridMaker';

interface DateCellProps {
  day: any;
  selectedDay: any;
  firstDayCurrentMonth: any;
  setSelectedDay: any;
}

export const DateCell = ({
  day,
  selectedDay,
  firstDayCurrentMonth,
  setSelectedDay,
}: DateCellProps) => {
  const { EACH_COL_WIDTH, GUTTER_WIDTH } = useFlexGridMaker();

  const sx = {
    w: 8,
    h: 10,
    rounded: 'full',
    background: 'transparent',
    ...(isEqual(day, selectedDay) && { color: 'white' }),
    ...(!isEqual(day, selectedDay) && isToday(day) && { color: 'red.500' }),
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
    <Box key={day.toString()} w={EACH_COL_WIDTH} px={GUTTER_WIDTH} py={2}>
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
        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
      </Button>
    </Box>
  );
};
