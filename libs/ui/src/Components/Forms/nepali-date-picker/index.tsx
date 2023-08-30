import React, {useMemo} from "react";
import {Box, Button, Flex, Input, Select, Table, Tbody, Td, Text, Thead, Tr} from "@chakra-ui/react"
import {ADToBS} from "bikram-sambat-js"
import {englishToNepaliNumber} from 'nepali-number';
import dayjs from 'dayjs';
import * as fromCalendarEngine from "./calendar-engine";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {When} from "react-if";
import {get_styles } from "./style";

export const childOf = (childNode: any, parentNode: any): boolean =>
    parentNode.contains(childNode);


interface NepaliDatePickerProps {
    date: string,
    calendarDate: fromCalendarEngine.type_calendar_mode,
    dateType: string,
    is_dark?:boolean
}

export const NepaliDatePicker = ({is_dark = false,date, calendarDate, dateType}: NepaliDatePickerProps) => {

    // VARIABLES
    const nepaliDatePickerWrapper = React.useRef<HTMLDivElement>(null);
    const nepaliDatePickerInput = React.useRef<HTMLInputElement>(null);
    const Styles = get_styles(is_dark)

    // LOCAL STATE
    const [showCalendar, setShowCalendar] = React.useState<boolean>(false);
    const [_calendarDate, _setCalendarDate] = React.useState("")
    const [_date, _setDate] = React.useState("")


    // FUNCTIONS
    const handleClickOutside = React.useCallback((event: any) => {
        if (
            nepaliDatePickerWrapper.current &&
            childOf(event.target, nepaliDatePickerWrapper.current)
        ) {
            return;
        }

        setShowCalendar(false);
    }, []);


    React.useLayoutEffect(() => {
        if (showCalendar) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCalendar]);

    React.useEffect(() => {
        _setCalendarDate(calendarDate)
    }, [
        calendarDate
    ])


    React.useLayoutEffect(() => {
        if (showCalendar && nepaliDatePickerWrapper.current) {
            const nepaliDatePicker =
                nepaliDatePickerWrapper.current.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            const calender: HTMLDivElement | null =
                nepaliDatePickerWrapper.current.querySelector('.calender');
            if (calender) {
                setTimeout(() => {
                    const calenderHeight = calender.clientHeight;

                    if (calenderHeight + nepaliDatePicker.bottom > screenHeight) {
                        if (calenderHeight < nepaliDatePicker.top) {
                            calender.style.bottom = `${nepaliDatePicker.height}px`;
                        }
                    }
                }, 0);
            }
        }
    }, [showCalendar]);

    React.useEffect(() => {
        _setDate(date)
    }, [
        date
    ])

    const onTodayClickHandler = () => {
        const formattedTodayDate = dayjs().format('YYYY-MM-DD');
        _setCalendarDate(formattedTodayDate)
        _setDate(formattedTodayDate)
    }

    return <div style={{
        maxWidth:"200px",
        position: "relative"
    }} ref={nepaliDatePickerWrapper}>

        <CustomInputWithRefForwarded
            ref={nepaliDatePickerInput}
            value={_date}
            onChange={(val: string) => {
                _setDate(val)
                _setCalendarDate(val)
            }}
            onClick={() => setShowCalendar(visible => !visible)}
        />

        <When condition={showCalendar && date}>
            <Box sx={Styles.calendar}>
                <Box className="calender-wrapper">
                    <CalendarController
                        calendar_date={_calendarDate}
                        onNextMonth={() => {
                            const nextMonthDate = fromCalendarEngine.ENGLISH_DATE.get_next_month_date(_calendarDate)
                            _setCalendarDate(nextMonthDate)
                        }}
                        onPreviousMonth={() => {
                            const previousMonthDate = fromCalendarEngine.ENGLISH_DATE.get_previous_month_date(_calendarDate)
                            _setCalendarDate(previousMonthDate)
                        }}
                        onNextYear={() => {
                            const nextYearDate = fromCalendarEngine.ENGLISH_DATE.get_next_year_date(_calendarDate)
                            _setCalendarDate(nextYearDate)
                        }}
                        onPreviousYear={() => {
                            const previousYearDate = fromCalendarEngine.ENGLISH_DATE.get_previous_year_date(_calendarDate)
                            _setCalendarDate(previousYearDate)
                        }}
                        onYearSelect={(calendar_date: any) => {
                            console.log(calendar_date)
                            _setCalendarDate(calendar_date)
                        }}
                        onMonthSelect={(calendar_date: string) => {
                            console.log(calendar_date)
                            _setCalendarDate(calendar_date)
                        }}
                    />
                    <MonthYearPanel date={_calendarDate} Styles={Styles}/>
                    <Table variant='unstyled'>
                        <DayPickerHeader/>
                        <DatePickerBody
                            Styles={Styles}
                            date={_date}
                            dateType={dateType}
                            calendarDate={_calendarDate}
                            onSelectDate={(formattedDate: any) => {
                                console.log(formattedDate)
                                setShowCalendar(false);
                                _setDate(formattedDate)
                            }}/>
                    </Table>
                    <Box p={2} textAlign="center" onClick={onTodayClickHandler}>
                        Today
                    </Box>
                </Box>
            </Box>
        </When>

    </div>

}


const DayPickerHeader = () => {
    return (
        <Thead>
            <Tr>
                {fromCalendarEngine.weeks["en"].map(
                    (weekDay: string, index: number) => (
                        <Td p={2} key={index}>{weekDay}</Td>
                    ),
                )}
            </Tr>
        </Thead>
    );
}

interface DatePickerBodyProps {
    date: string,
    calendarDate: fromCalendarEngine.type_calendar_mode,
    dateType: string,
    onSelectDate: any,
    Styles:any
}

const DatePickerBody = ({date, calendarDate, dateType, onSelectDate, Styles}: DatePickerBodyProps) => {
    const normalized_calendar_date = fromCalendarEngine.ENGLISH_DATE.get_normalized_date(calendarDate, dateType);
    const normalized_date = fromCalendarEngine.ENGLISH_DATE.get_normalized_date(date, dateType);

    const weeks_in_english_month =
        fromCalendarEngine.ENGLISH_DATE.get_weeks_in_month(
            new Date(normalized_calendar_date),
        );

    const handleDaySelection = (dayInfo: any) => {
        const selectedDate = new Date(dayInfo.year, dayInfo.month - 1, dayInfo.day);
        const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
        onSelectDate(formattedDate);
    }

    return <Tbody>

        {fromCalendarEngine
            .range(0, weeks_in_english_month - 1)
            .map((weekNum: number) => (
                <Tr key={weekNum}>
                    {fromCalendarEngine.range(1, 7).map((weekDayNum: number) => {
                        const dayInfo = fromCalendarEngine.ENGLISH_DATE.get_day_info(
                            weekNum,
                            weekDayNum,
                            normalized_calendar_date,
                            normalized_date,
                        );

                        const sx = {
                            p:2,
                            ...(dayInfo.isSelected && {...Styles.selected}),
                            ...(dayInfo.isToday && {...Styles.today}),
                            ...(dayInfo.isCurrentMonth ? {...Styles.current} : {...Styles.disabled}),
                        }
                        return (
                            <Td
                                key={weekDayNum}
                                sx={sx}

                                onClick={() => handleDaySelection(dayInfo)}
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
    calendar_date: fromCalendarEngine.type_calendar_mode,
    onPreviousMonth: any;
    onNextMonth: any;
    onNextYear: any;
    onPreviousYear: any;
    onYearSelect: (calendar_date: string) => void;
    onMonthSelect: (calendar_date: string) => void
}

export const CalendarController = ({
                                       onPreviousMonth,
                                       onNextMonth,
                                       onNextYear,
                                       onPreviousYear,
                                       onYearSelect,
                                       onMonthSelect,
                                       calendar_date
                                   }: CalendarControllerProps) => {

    return (
        <Flex justifyContent='space-between' p={2}>
            <Flex gap='5px'>
                <Button size='xs' variant='link' onClick={onPreviousYear}>
                    <AiOutlineDoubleLeft/>
                </Button>
                <Button size='xs' variant='link' onClick={onPreviousMonth}>
                    <AiOutlineLeft/>
                </Button>
            </Flex>

            <Flex gap='5px'>
                <MonthPicker calendar_date={calendar_date} onSelect={onMonthSelect}/>
                <YearPicker calendarDate={calendar_date} onYearSelect={onYearSelect}/>
            </Flex>

            <Flex gap='5px'>
                <Button size='xs' variant='link' onClick={onNextMonth}>
                    <AiOutlineRight/>
                </Button>
                <Button size='xs' variant='link' onClick={onNextYear}>
                    <AiOutlineDoubleRight/>
                </Button>
            </Flex>

        </Flex>
    );
}

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
        <Box>
            <Select size='sm' value={_selected} onChange={handleMonthSelection}>
                {englishMonthList.map(({label, value}) => {
                    return <option key={value} value={value}>{label}</option>
                })}
            </Select>
        </Box>
    );
};


interface YearPickerProps {
    calendarDate: string;
    onYearSelect: (calendar_date: string) => void;
}

export const YearPicker = ({calendarDate, onYearSelect}: YearPickerProps) => {
    const [_selected, _setSelected] = React.useState<number>(1);

    React.useEffect(() => {
        if (calendarDate) {
            const splited_calendar_date = calendarDate.split("-")
            _setSelected(parseInt(splited_calendar_date[0]))
        }
    }, [calendarDate])

    function range(start: number, end: number): number[] {
        return Array.from({length: end - start + 1}, (_, i) => start + i);
    }

    const engyears: any[] = useMemo(
        (): any[] =>
            range(1970, 2050)
                .reverse()
                .map(
                    (year: number): any => ({
                        label: year,
                        value: year,
                    }),
                ),
        [],
    );

    const handleYearSelection = (e: any) => {
        const splited_calendar_date = calendarDate.split("-")
        const new_date = fromCalendarEngine.stitch_date({
            year: e.target.value,
            month: parseInt(splited_calendar_date[1]),
            day: 1,
        })

        _setSelected(e.target.value)
        onYearSelect(new_date)
    }

    return (
        <Box>
            <Select size='sm' value={_selected} onChange={handleYearSelection}>
                {engyears.map(({label, value}) => {
                    return <option key={value} value={value}>{label}</option>
                })}
            </Select>
        </Box>
    );
};


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
    Styles:any
}

export const MonthYearPanel = ({date, Styles}: MonthYearPanelProps) => {

    const now = new Date(date)
    const month = now.getMonth();
    const converted_nepali_date = ADToBS(now);
    const splited_nepali_date = converted_nepali_date.split("-");
    const nepaliyear = englishToNepaliNumber(splited_nepali_date[0]);


    return <Box sx={Styles.month_year_panel}>
        {`${nepaliMonthMap[month]} ${nepaliyear}`}
    </Box>
};

interface CustomInputProps extends Record<string, any> {
    onChange: (date: string) => void,
    value: string
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

export const CustomInputWithRefForwarded = React.forwardRef(
    (props: any, ref) => {
        return <CustomInput ref={ref} {...props} />;
    },
);