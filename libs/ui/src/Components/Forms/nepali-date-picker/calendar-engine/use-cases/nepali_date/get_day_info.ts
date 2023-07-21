import * as from_utilities from "../../utilities";
import {ADToBS} from "bikram-sambat-js";
import {NEPALI_DATE} from ".";
import {ENGLISH_DATE} from "../english_date";

export const get_day_info = (weekNum: any, weekDayNum: any, date: any, selectedDate: any) => {
    const firstAdDay = date.firstAdDayInBSMonth.getDay()
    let day = weekNum * 7 + weekDayNum - firstAdDay;
    let month = date.bsMonth;
    const year = date.bsYear;

    let isCurrentMonth = true;

    if (day <= 0) {
        day = NEPALI_DATE.previous_month_days(date) + day;
        isCurrentMonth = false;
        month = date.bsMonth === 1 ? 12 : date.bsMonth - 1
    } else if (day > date.numberOfDaysInBSMonth) {
        day = day - date.numberOfDaysInBSMonth;
        isCurrentMonth = false;
        month = date.bsMonth === 12 ? 1 : date.bsMonth + 1
    }

    const today = from_utilities.split_date(ADToBS(new Date()));

    const isToday = isCurrentMonth
        ? today.day === day &&
        today.month === date.bsMonth &&
        today.year === date.bsYear
        : false;
    const isSelected = isCurrentMonth
        ? selectedDate.bsDay === day &&
        selectedDate.bsMonth === date.bsMonth &&
        selectedDate.bsYear === date.bsYear
        : false;

    const engDayInfo = ENGLISH_DATE.get_eng_day_info(year, month, day);
    return {
        day,
        month,
        year,
        isCurrentMonth,
        isToday,
        isSelected,
        ...engDayInfo,
    };
}