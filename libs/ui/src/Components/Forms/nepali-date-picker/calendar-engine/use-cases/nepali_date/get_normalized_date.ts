import {ADToBS} from "bikram-sambat-js";
import * as from_domains from "../../domains"

/**
 * ALWAYS RETURNS NEPALI DATE
 */
export const get_normalized_date = (params: from_domains.INormalizedDate) => {

    const {date, dateType} = params

    if (dateType === from_domains.DATE_TYPE_NEPALI) {
        return date
    }

    return ADToBS(date)

}