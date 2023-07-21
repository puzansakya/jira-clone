import React from "react";
import {Box, Flex, Input, Select, Table, Tbody, Td, Text, Thead, Tr} from "@chakra-ui/react"
import * as fromCalendarEngine from "./calendar-engine";
import {englishToNepaliNumber} from 'nepali-number';
import "./style.scss"
import {ADToBS} from "bikram-sambat-js"


interface NepaliDatePickerProps {
    date: string,
    calendarDate: fromCalendarEngine.type_calendar_mode,
    dateType: string
}

export const NepaliDatePicker = ({date, calendarDate, dateType}: NepaliDatePickerProps) => {

    const [_calendarDate, _setCalendarDate] = React.useState("")
    const [_date, _setDate] = React.useState("")

    React.useEffect(() => {
        _setCalendarDate(calendarDate)
    }, [
        calendarDate
    ])

    React.useEffect(() => {
        _setDate(date)
    }, [
        date
    ])

    return <Box className="nepali-date-picker">

        <CustomInput onChange={(date:string) => {
            _setDate(date)
        }} value={_date} />

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
                    calendar_date={_calendarDate}
                    onMonthSelect={(calendar_date: string) => {
                        _setCalendarDate(calendar_date)
                    }}
                />
                <MonthYearPanel date={_calendarDate}/>
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
    calendar_date: string;
    onMonthSelect: (calendar_date: string) => void
}

export const CalendarController = ({
                                       onPreviousMonth,
                                       onNextMonth,
                                       calendar_date,
                                       onMonthSelect
                                   }: CalendarControllerProps) => {
    return (
        <div className="calendar-controller">
            <span className="control icon" onClick={onPreviousMonth}>
                previous {/*<PreviousIcon />*/}
            </span>

            <div className="date-indicator">
                <MonthPicker calendar_date={calendar_date} onSelect={onMonthSelect}/>
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


/**
 * {
 *   "adDate": "2023-07-10T00:00:00.000Z",
 *   "bsDay": 25,
 *   "bsMonth": 3,
 *   "bsYear": 2080,
 *   "firstAdDayInBSMonth": "2023-06-16T00:00:00.000Z",
 *   "numberOfDaysInBSMonth": 31,
 *   "weekDay": 1
 * }
 */

const nepaliMonthMap: any = {
    0: 'पुस - माघ',
    1: 'माघ - फागुन',
    2: 'फागुन - चैत',
    3: 'चैत - बैशाख',
    4: 'बैशाख - जेठ',
    5: 'जेठ - असार',
    6: 'असार - साउन',
    7: 'साउन - भदौ',
    8: 'भदौ - असौज',
    9: 'असौज - कात्तिक',
    10: 'कात्तिक - मंसीर',
    11: 'मंसीर - पुस',
};

interface MonthYearPanelProps {
    date: string;
}

export const MonthYearPanel = ({date}: MonthYearPanelProps) => {

    const now = new Date(date)
    const month = now.getMonth();
    const converted_nepali_date = ADToBS(now);
    const splited_nepali_date = converted_nepali_date.split("-");


    return <Box p={3} bg={'gray.100'} textAlign='center'>
        {`${nepaliMonthMap[month]} ${splited_nepali_date[0]}`}
    </Box>
};


interface MonthPickerProps {
    calendar_date: string;
    onSelect: (calendar_date: string) => void;
}

const MonthPicker = ({calendar_date, onSelect,}: MonthPickerProps) => {

    const [_selected, _setSelected] = React.useState<number>(1);

    React.useEffect(() => {
        if (calendar_date) {
            const splited_calendar_date = calendar_date.split("-")
            _setSelected(parseInt(splited_calendar_date[1]))
        }
    }, [calendar_date])

    const englishMonthList: any[] = React.useMemo(() => {
        return fromCalendarEngine.ENGLISH_MONTHS.map((month: any, index: number) => ({
            label: month,
            value: index + 1,
        }));
    }, []);

    const handleMonthSelection = (e: any) => {
        const splited_calendar_date = calendar_date.split("-")
        const new_date = fromCalendarEngine.stitch_date({
            year: splited_calendar_date[0],
            month: e.target.value,
            day: 1,
        })

        _setSelected(e.target.value)
        onSelect(new_date)
    }

    return (
        <Box className='control month'>
            <Select placeholder='Select option' value={_selected} onChange={handleMonthSelection}>
                {englishMonthList.map(({label, value}) => {
                    return <option value={value}>{label}</option>
                })}
            </Select>
        </Box>
    );
};

interface CustomInputProps extends Record<string, any> {
    onChange: (date:string) => void,
    value:string
}
export const CustomInput = ({onChange, value, ...rest}: CustomInputProps) => {

    const [inputDate, setInputDate] = React.useState('');
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format

    React.useEffect(() => {
        setInputDate(value);
    }, [value]);

    const handleInputChange = (e: any) => {

        const formattedValue = formatInputDate(e.target.value);
        setInputDate(formattedValue);

        const isValid = handleValidation(formattedValue);
        if (isValid) {
             onChange?.(formattedValue);
        }
    };

    const handleValidation = (inputDate: any) => {
        return dateFormat.test(inputDate);
    };

    const formatInputDate = (inputValue: any) => {
        const numericValue = inputValue.replace(/\D/g, '');
        const year = numericValue.slice(0, 4);
        const month = numericValue.slice(4, 6);
        const day = numericValue.slice(6, 8);

        let formattedValue = '';
        if (year) {
            formattedValue += year;
        }
        if (month) {
            formattedValue += '-' + month;
        }
        if (day) {
            formattedValue += '-' + day;
        }

        return formattedValue;
    };

    return (
        <Box maxW={80}>
            <Input
                value={inputDate}
                onChange={handleInputChange}
                placeholder='YYYY-MM-DD'
                {...rest}
            />
        </Box>
    );
};
