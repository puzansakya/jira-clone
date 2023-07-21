import {get_first_day_of_the_month} from "./get_first_day_of_the_month";
import {ENGLISH_DATE} from ".";
import dayjs from 'dayjs';
import * as from_utilities from "../../utilities";
import {ADToBS} from "bikram-sambat-js";

const is_today = (date: Date) => {
    const currentDate = dayjs();

    const providedDate = dayjs(date);

    return providedDate.isSame(currentDate, 'day');

}
export const get_day_info = (weekNum: any, weekDayNum: any, calendar_date: any, input_date?: any) => {

    const formattedDate = dayjs(calendar_date).format('YYYY-MM-DD');
    const inputDate: Date = new Date(formattedDate);
    const firstDay: number = get_first_day_of_the_month(inputDate);

    let day = weekNum * 7 + weekDayNum - firstDay;
    let month: number = inputDate.getMonth() + 1;
    let year: number = inputDate.getFullYear();

    const total_no_of_days_in_this_month = ENGLISH_DATE.get_total_days_in_month(new Date(formattedDate))

    let isCurrentMonth = true;

    if (day <= 0) {
        month = month === 1 ? 12 : month - 1;
        isCurrentMonth = false
        year = month === 0 ? year - 1 : year

        const stiched = from_utilities.stitch_date({
            year,
            month,
            day: 1
        })
        const total_no_of_days_in_previous_month = ENGLISH_DATE.get_total_days_in_month(new Date(stiched))

        day = total_no_of_days_in_previous_month + day

    } else if (day > total_no_of_days_in_this_month) {
        day = day - total_no_of_days_in_this_month
        month = month === 12 ? 1 : month + 1;
        isCurrentMonth = false
        year = month === 11 ? year + 1 : year
    }


    const latest_stiched_date = from_utilities.stitch_date({
        year,
        month: month,
        day: day
    })
    const converted_nepali_date = ADToBS(new Date(latest_stiched_date))

    const splitted_nepali_date = converted_nepali_date.split("-");


    let isToday = false
    let isSelected = false

    if (input_date) {
        isToday = is_today(new Date(latest_stiched_date));
        isSelected = dayjs(latest_stiched_date).isSame(dayjs(input_date), 'day')
    }

    return {
        day,
        month,
        year,
        nepaliDay: parseInt(splitted_nepali_date[2]),
        nepaliMonth: parseInt(splitted_nepali_date[1]),
        nepaliYear: parseInt(splitted_nepali_date[0]),
        isCurrentMonth,  // required to enable current month dates
        isToday,
        isSelected,
        // ...engDayInfo,
    };


}