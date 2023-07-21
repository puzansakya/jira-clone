import {get_weeks_in_month} from "./get_weeks_in_month";
import {get_normalized_date} from "./get_normalized_date";
import {get_day_info} from "./get_day_info";
import {previous_month_days} from "./previous_month_days";
import {previous_month} from "./previous_month";
import {get_number_of_days_in_BS_month} from "./get_number_of_days_in_BS_month";
import {previous_year} from "./previous_year";

export const NEPALI_DATE = {
    get_day_info,
    get_normalized_date,
    get_number_of_days_in_BS_month,
    get_weeks_in_month,
    previous_month,
    previous_month_days,
    previous_year,
}