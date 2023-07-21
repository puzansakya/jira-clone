import React from "react";
import {Box, Flex, Table, Tbody, Td, Text, Thead, Tr} from "@chakra-ui/react"
import * as fromCalendarEngine from "./calendar-engine";
import {englishToNepaliNumber} from 'nepali-number';
import "./style.scss"

interface NepaliDatePickerProps {
    date: string,
    calendarDate: fromCalendarEngine.type_calendar_mode,
    dateType: string
}

export const NepaliDatePicker = ({date, calendarDate, dateType}: NepaliDatePickerProps) => {

    const [_calendarDate, _setCalendarDate] = React.useState("")

    React.useEffect(() => {
        _setCalendarDate(calendarDate)
    }, [
        calendarDate
    ])

    return <Box className="nepali-date-picker">
        <Box className="calender">
            <Box className="calender-wrapper">
                <CalendarController
                    onNextMonth={() => {
                        const nextMonthDate = fromCalendarEngine.ENGLISH_DATE.get_next_month_date(_calendarDate)
                        _setCalendarDate(nextMonthDate)
                    }}
                    onPreviousMonth={() => {
                        const previousMonthDate = fromCalendarEngine.ENGLISH_DATE.get_previous_month_date(_calendarDate)
                        _setCalendarDate(previousMonthDate)
                    }}
                />
                <Table>
                    <DayPickerHeader/>
                    <DatePickerBody
                        date={date}
                        dateType={dateType}
                        calendarDate={_calendarDate}/>
                </Table>
            </Box>
        </Box>
    </Box>

}


const DayPickerHeader = () => {

    return (
        <Thead>
            <Tr>
                {fromCalendarEngine.weeks["en"].map(
                    (weekDay: string, index: number) => (
                        <Td key={index}>{weekDay}</Td>
                    ),
                )}
            </Tr>
        </Thead>
    );
}

interface DatePickerBodyProps {
    date: string,
    calendarDate: fromCalendarEngine.type_calendar_mode,
    dateType: string

}

const DatePickerBody = ({date, calendarDate, dateType}: DatePickerBodyProps) => {
    const normalized_calendar_date = fromCalendarEngine.ENGLISH_DATE.get_normalized_date(calendarDate, dateType);
    const normalized_date = fromCalendarEngine.ENGLISH_DATE.get_normalized_date(date, dateType);

    const weeks_in_english_month =
        fromCalendarEngine.ENGLISH_DATE.get_weeks_in_month(
            new Date(normalized_calendar_date),
        );

    return <Tbody>

        {fromCalendarEngine
            .range(0, weeks_in_english_month)
            .map((weekNum: number) => (
                <Tr key={weekNum}>
                    {fromCalendarEngine.range(1, 7).map((weekDayNum: number) => {
                        const dayInfo = fromCalendarEngine.ENGLISH_DATE.get_day_info(
                            weekNum,
                            weekDayNum,
                            normalized_calendar_date,
                            normalized_date,
                        );
                        return (
                            <Td
                                key={weekDayNum}
                                className={`month-day ${
                                    dayInfo.isCurrentMonth ? 'current' : 'disabled'
                                } ${dayInfo.isToday ? 'today' : ''} ${
                                    dayInfo.isSelected ? 'selected' : ''
                                }`}
                            >
                                <Flex gap={1} alignItems={'end'}>
                                    <Text>{dayInfo.day}</Text>
                                    <Text fontSize={'xs'} color='gray.300'>
                                        {englishToNepaliNumber(dayInfo.nepaliDay)}
                                    </Text>
                                </Flex>
                            </Td>
                        );
                    })}
                </Tr>
            ))}
    </Tbody>;
};

interface CalendarControllerProps {
    onPreviousMonth: any;
    onNextMonth: any;
}

export const CalendarController = ({onPreviousMonth, onNextMonth}: CalendarControllerProps) => {
    return (
        <div className="calendar-controller">
            <span className="control icon" onClick={onPreviousMonth}>
                previous {/*<PreviousIcon />*/}
            </span>

            <div className="date-indicator">
                {/*<MonthPicker date={calenderDate} onSelect={onMonthSelect} />*/}
                {/*<YearPicker date={calenderDate} onSelect={onYearSelect} />*/}
            </div>
            {/*
            <span className='control icon icon-today' title={trans("today")} onClick={onToday}>
                <TodayIcon color='#2096f5' />
            </span> */}

            <span className="control icon"
                  onClick={onNextMonth}>

                next {/*<NextIcon />*/}
            </span>
        </div>
    );
}